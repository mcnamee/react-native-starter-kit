/**
 * API Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import {
  AsyncStorage,
} from 'react-native';
import jwtDecode from 'jwt-decode';

// App Globals
import AppConfig from './config';
import AppUtil from './util';

// Config
const HOSTNAME = AppConfig.hostname;

// Add each endpoint here
const ENDPOINTS = AppConfig.endpoints;

// In memory to make it quicker
let apiToken = '';
const apiCredentials = {};

// Enable debug output
const DEBUG_MODE = __DEV__;

/* Public API Functions ==================================================================== */
const AppAPI = {
  /**
    * Sends requests to the API
    */
  handleError: (err) => {
    let error = '';
    if (typeof err === 'string') error = err;
    else if (err.message) error = err.message;

    if (!err) error = AppConfig.errors.default;
    return error;
  },
};

/* Internal API Functions ==================================================================== */
const Internal = {
  /**
    * Debug or not to debug
    */
  debug: (str, title) => {
    if (DEBUG_MODE && str) {
      if (title) console.log(`DEBUG: ${title} ..........................................`);
      console.log(str);
      console.log('/DEBUG ..........................................');
    }
  },

  /**
    * Convert param object into query string
    * eg.
    *   {foo: 'hi there', bar: { blah: 123, quux: [1, 2, 3] }}
    *   foo=hi there&bar[blah]=123&bar[quux][0]=1&bar[quux][1]=2&bar[quux][2]=3
    */
  serialize: (obj, prefix) => {
    const str = [];

    Object.keys(obj).forEach((p) => {
      const k = prefix ? `${prefix} [ ${p} ]` : p;
      const v = obj[p];

      str.push((v !== null && typeof v === 'object') ?
        Internal.serialize(v, k) :
        `${encodeURIComponent(k)} = ${encodeURIComponent(v)}`);
    });

    return str.join('&');
  },

  /**
    * Retrieves API Auth Token
    */
  getToken: async () => {
    if (!apiToken) apiToken = await AsyncStorage.getItem('api/token');
    if (apiToken && !Internal.tokenIsValid(apiToken)) apiToken = null;

    return apiToken;
  },

  /**
    * Check if a token is valid
    */
  tokenIsValid: (token, userId = null) => {
    let decodedToken;
    try {
      decodedToken = jwtDecode(token);
    } catch (e) {
      // Decode failed, must be invalid
      return false;
    }

    const NOW = (Date.now() / 1000) || 0; // current UTC time in whole seconds
    const EAGER_RENEW = 60; // number of seconds prior to expiry that a token is considered 'old'

    // Validate against 'expiry', 'not before' and 'sub' fields in token
    if (NOW > (decodedToken.exp - EAGER_RENEW)) return false; // Expired
    if (NOW < decodedToken.nbf - 300) return false; // Not yet valid (too early!)

    // Don't worry about http vs https - strip it out
    const thisHostname = AppConfig.hostname.replace(/.*?:\/\//g, '');
    const tokenHostname = decodedToken.iss.replace(/.*?:\/\//g, '').substr(0, thisHostname.length);
    if (thisHostname !== tokenHostname) {
      return false; // Issuing server is different
    }

    if (
      userId && decodedToken.sub > 0 &&
      decodedToken.sub !== userId
    ) {
      return false; // Token is for another user
    }

    return true;
  },

  /**
    * Sends requests to the API
    */
  fetcher: (method, endpoint, params, body) => {
    return new Promise(async (resolve, reject) => {
      // After x seconds, let's call it a day!
      const timeoutAfter = 7;
      const apiTimedOut = setTimeout(() => {
        return reject(AppConfig.errors.timeout);
      }, timeoutAfter * 1000);

      if (!method || !endpoint) return reject('Missing params (AppAPI.fetcher).');

      // Build request
      const req = {
        method: method.toUpperCase(),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      // Add Token
      apiToken = await Internal.getToken();
      if (apiToken) {
        req.headers.Authorization = `Bearer ${apiToken}`;
      }

      // Add Endpoint Params
      let urlParams = '';
      if (params) {
        // Object - eg. /recipes?title=this&cat=2
        if (typeof params === 'object') {
          urlParams = `? ${Internal.serialize(params)}`;

        // String or Number - eg. /recipes/23
        } else if (typeof params === 'string' || typeof params === 'number') {
          urlParams = `/ ${params}`;

        // Something else? Just log an error
        } else {
          Internal.debug('You provided params, but it wasn\'t an object!', HOSTNAME + endpoint + urlParams);
        }
      }

      // Add Body
      if (body) req.body = JSON.stringify(body);

      // Make the request
      return fetch(HOSTNAME + endpoint + urlParams, req)
        .then(async (rawRes) => {
          // API got back to us, clear the timeout
          clearTimeout(apiTimedOut);

          const jsonRes = await rawRes.json();

          // Only continue if the header is successful
          if (rawRes && rawRes.status === 200) { return jsonRes; }
          throw jsonRes;
        })
        .then((res) => {
          Internal.debug(res, HOSTNAME + endpoint + urlParams);
          return resolve(res);
        })
        .catch((err) => {
          // API got back to us, clear the timeout
          clearTimeout(apiTimedOut);

          // If unauthorized, try logging them back in
          if (
            !AppUtil.objIsEmpty(apiCredentials) &&
            err &&
            err.data &&
            err.data.status.toString().charAt(0) === 4 &&
            err.code !== 'jwt_auth_failed')
          {
            return AppAPI.authenticate()
              .then(() => { Internal.fetcher(method, endpoint, params, body); })
              .catch((error) => { return reject(error); });
          }

          Internal.debug(err, HOSTNAME + endpoint + urlParams);
          return reject(err);
        });
    });
  },
};

/**
  * Build services from Endpoints
  * - So we can call AppAPI.recipes.get() for example
  */
Object.keys(ENDPOINTS).forEach((key) => {
  const endpoint = ENDPOINTS[key];

  AppAPI[key] = {
    get: (params, payload) => Internal.fetcher('GET', endpoint, params, payload),
    post: (params, payload) => Internal.fetcher('POST', endpoint, params, payload),
    patch: (params, payload) => Internal.fetcher('PATCH', endpoint, params, payload),
    put: (params, payload) => Internal.fetcher('PUT', endpoint, params, payload),
    delete: (params, payload) => Internal.fetcher('DELETE', endpoint, params, payload),
  };
});

/**
  * Authenticate
  */
AppAPI.authenticate = function (credentials) {
  return new Promise(async (resolve, reject) => {
    // Check any existing tokens - if still valid, use it, otherwise login
    apiToken = await Internal.getToken();
    if (apiToken && Internal.tokenIsValid(apiToken)) return resolve(apiToken);

    // Use credentials or AsyncStore Creds?
    if (credentials && typeof credentials === 'object' && credentials.username && credentials.password) {
      apiCredentials.username = credentials.username;
      apiCredentials.password = credentials.password;

      // Save new Credentials to AsyncStorage
      await AsyncStorage.setItem('api/credentials', JSON.stringify(credentials));

    // See if credentials are in AsyncStoreage
    } else {
      const storedCredsStr = await AsyncStorage.getItem('api/credentials');
      let storedCreds = '';

      if (storedCredsStr) {
        storedCreds = JSON.parse(storedCredsStr);
      }

      if (storedCreds && typeof storedCreds === 'object' && storedCreds.username && storedCreds.password) {
        apiCredentials.username = storedCreds.username;
        apiCredentials.password = storedCreds.password;
      }
    }

    // No credentials, we can't do anything
    if (!apiCredentials || !apiCredentials.username || !apiCredentials.password) {
      return reject({
        data: { status: 403 },
        message: 'Credentials missing (AppAPI.authenticate).',
      });
    }

    // Let's try logging in
    return AppAPI.login.post(null, {
      username: apiCredentials.username,
      password: apiCredentials.password,
    }).then(async (res) => {
      if (!res.token) {
        return reject(res);
      }

      if (!Internal.tokenIsValid(res.token)) {
        return reject(res);
      }

      // Set token in AsyncStorage + memory
      await AsyncStorage.setItem('api/token', res.token);
      apiToken = res.token;

      return resolve(res.token);
    }).catch(err => reject(err));
  });
};

/**
  * Logout
  */
AppAPI.logout = async function () {
  await AsyncStorage.setItem('api/token', '');
  await AsyncStorage.setItem('api/credentials', '');
  apiToken = '';
};

/* Export ==================================================================== */
module.exports = AppAPI;
module.exports.details = {
  title: 'AppAPI',
};
