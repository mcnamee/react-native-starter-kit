/**
 * Global API
 * A simple helper to interact with the API (most methods return Promises).
 *
 * Examples:
 *
 *   api.Address.get(123)
 *      .then((result) => {
 *          // do something
 *      });
 *
 *   api.Address.patch(123, {
 *      address: '456 Test St'
 *      suburb: 'Testville'
 *      country: 'Australia'
 *   });
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { AsyncStorage } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import jwtDecode from 'jwt-decode';
import queryString from 'qs';
import AppConfig from './config';
import AppUtil from './util';


// Enable debug output
const DEBUG_MODE = AppConfig.DEV;

// Build user agent string
const USER_AGENT = `${AppConfig.appName} 
  ${DeviceInfo.getVersion()}; ${DeviceInfo.getSystemName()} 
  ${DeviceInfo.getSystemVersion()}; ${DeviceInfo.getBrand()} 
  ${DeviceInfo.getDeviceId()}`;

// General options to be used for all requests
const CONFIG = {
  hostname: AppConfig.hostname,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': USER_AGENT,
  },
};

// API Endpoints (friendly key => URL endpoint)
const ENDPOINTS = AppConfig.endpoints;

// Cache API token in memory
let memoryToken;

// Number each API request (used for debugging)
let requestCounter = 1;

// A promise to notify listeners when a token has been fetched.
// This will help prevent multiple concurrent API calls from all fetching their own tokens.
let tokenFetcherPromise = null;


// Check if a token is valid
function tokenIsValid(token, userId = null) {
  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (e) {
    // Decode failed, must be invalid
    return false;
  }

  const NOW = (Date.now() / 1000) || 0; // current UTC time in whole seconds
  const EAGER_RENEW = 60; // number of seconds prior to expiry that a token is considered "old"

  // Validate against "expiry", "not before" and "sub" fields in token
  if (NOW > (decodedToken.exp - EAGER_RENEW)) return false; // Expired
  if (NOW < decodedToken.nbf - 300) return false; // Not yet valid (too early!)

  // Don't worry about http vs https - strip it out
  const thisHostname = CONFIG.hostname.replace(/.*?:\/\//g, "");
  const tokenHostname = decodedToken.iss.replace(/.*?:\/\//g, "").substr(0, thisHostname.length);
  if (thisHostname != tokenHostname) {
    return false; // Issuing server is different
  }

  if (userId && decodedToken.sub > 0 && decodedToken.sub != userId) return false; // Token is for another user
  return true;
}


// The gate-keeper for getting tokens
export function tokenFetcher(type) {
  if (!tokenFetcherPromise) {
    // No outstanding token requests. Start one and save promise...
    tokenFetcherPromise = getToken(type)
      .then((token) => {
        // Forget promise (forcing any new requests to call "getToken()" again)
        tokenFetcherPromise = null;
        return token;
      });
  }

  return tokenFetcherPromise;
}


// Return an API token (an authenticated one if possible)
async function getToken(type = 'any') {
  if (type != 'new') {
    // Try in-memory cache
    if (memoryToken && tokenIsValid(memoryToken)) return memoryToken;

    // Try local storage
    let storedToken = await AsyncStorage.getItem('/api/token');
    if (storedToken && tokenIsValid(storedToken)) return storedToken;

    if (type == 'local') {
      // Sorry, no valid tokens were found locally.
      return false;
    }
  }

  // Fetch user credentials from local DB (if available)
  let credentials = null;
  let result = await AsyncStorage.getItem('/customer/credentials');

  if (result && typeof result == 'string') {
    try {
      credentials = JSON.parse(result);
    } catch (e) {
      // Do nothing
    }
  }

  // Fetch fresh token from API
  let response;
  if (credentials && credentials.username && credentials.password) {
    // The user's login details are available. Attempt to fetch an authenicated token.
    let payload = buildPayload('authenticate', null, credentials);
    response = await api.login.post(null, payload);

  } else {
    // User's login details not found.
    throw 'Error logging in.';
  }

  let apiToken = response.data.token;

  // Save token for later re-use
  // May throw exception if token from API was invalid
  setToken(apiToken);

  return apiToken;
}


// Makes API calls. Most methods return promises.
function apiEndpoint(url) {
  let endpointUrl = CONFIG.hostname + url;
  let requiresAuthToken = (url != 'authenticate');

  // Private func
  async function sendRequest(method, params = '', payload = null) {
    let requestNum = requestCounter++;

    let queryUrl = endpointUrl;
    let request = {
      method: method.toUpperCase() || 'GET',
      headers: {
        ...CONFIG.headers
      },
    }

    if (params) {
      if (typeof params === 'object') {
        if (params.hasOwnProperty('id')) {
          // Interact with a single resource (eg. /customer/123 OR /customer/abc%20xyz)
          queryUrl += '/' + encodeURIComponent(params.id);
          delete params.id;
        }

        if (!AppUtil.objIsEmpty(params)) {
          // Provide multiple filter params (eg. /customer?foo=bar)
          queryUrl += '?' + queryString.stringify(params);
        }

      } else {
        // Interact with a single resource (eg. /customer/123 OR /customer/abc%20xyz)
        queryUrl += '/' + encodeURIComponent(params);
      }
    }

    // Fetch a token
    let token;
    if (requiresAuthToken) {
      try {
        // Wait for token
        token = await tokenFetcher();

      } catch (e) {
        // Probably got a bad token. Re-throw a more user-friendly error msg.
        if (DEBUG_MODE) console.warn('API. Tried to fetch token but got a bad result: ', e);
        throw "Servers unavailable (Bad Token). Please try again.";
      }

    } else {
      // Token not required, but if one is available locally send it anyway
      token = await getToken('local');
    }

    if (token) {
      request.headers.Authorization = 'Bearer ' + token;
    }

    if (!AppUtil.objIsEmpty(payload) && !request.method.match(/GET|HEAD/g)) {
      request.body = JSON.stringify(payload);
    }

    if (DEBUG_MODE) {
      let url = queryUrl.replace(CONFIG.hostname, '/');
      console.info('API Request #' + requestNum + ': ', request.method, url, payload || '');
    }

    // Send request, await async response
    let rawResponse = await fetch(queryUrl, request);
    let response = await rawResponse.text();

    try {
      // Parse JSON if body given
      response = (response) ? JSON.parse(response) : {};

    } catch (e) {
      if (DEBUG_MODE) {
        console.warn('API Response #' + requestNum + ': JSON parse error. ', e, response);
      }

      // Failed to parse JSON response
      response = 'Unreadable response from server.';
    }

    response.httpStatus = rawResponse.status; // Add HTTP status

    if (DEBUG_MODE) {
      console.info('API Response #' + requestNum + ': ', response);
      requestNum++;
    }

    if (!rawResponse.status.toString().match(/^[23]/g)) {
      // Failure
      throw response;
    }

    return response;
  }

  // Expose read-only base URL for this endpoint
  this.baseUrl = () => queryUrl;

  // Expose helpers for common methods
  this.get = (params, payload) => sendRequest('GET', params, payload);
  this.post = (params, payload) => sendRequest('POST', params, payload);
  this.patch = (params, payload) => sendRequest('PATCH', params, payload);
  this.delete = (params, payload) => sendRequest('DELETE', params, payload);

  // Allow requests for custom HTTP methods
  this.request = (method, params, payload) => sendRequest(method, params, payload);
};


// Build a payload object using the given type, ID and attributes. Only "type" is required.
export function buildPayload(type, id, attributes = {}) {
  if (!type) throw "Payload type required";

  let payload = {
    data: {
      type: type,
      attributes: attributes
    }
  };

  // Add ID?
  if (id) {
    // Format
    if (typeof id === 'number') {
      payload.data.id = parseInt(id);
    } else if (typeof id === 'string') {
      payload.data.id = id;
    } else {
      throw 'Invalid ID param. Must be INT or String.';
    }
  }

  return payload;
}


// Parse an API response and returns a plain error message (string)
export function parseErrors(response) {
  if (!response) {
    // Response is blank, can't parse
    return '';
  }

  if (response.hasOwnProperty('httpStatus')) {
    // Canned responses based on HTTP code
    switch (response.httpStatus) {
      case 403:
        return 'Members only area. Please join or login and try again.';
      case 503:
        return 'The shop is temporarily down. Please try again later.';
      default:
        // Keep trying other methods below...
    }
  }

  if (!response.hasOwnProperty('errors') || (response.errors instanceof Array) === false) {
    // Cannot Parse
    return '';
  }

  // Formatter for a single error message
  let formatErrorMsg = (error) => {
    let msg = error.title;

    if (error.code) {
      // Unique error code available. Include it in message.
      msg += ' [' + error.code + ']';
    }

    return msg;
  }

  if (response.errors.length == 1) {
    // Return single error
    return formatErrorMsg(response.errors[0]);
  }

  // Combine all errors into one message
  let errors = response.errors.map((error, key) => '- ' + formatErrorMsg(error));
  return "There were a few issues:\n" + errors.join("\n");
}


// Save an API token for later re-use (overwrite any previously saved token)
// Setting an empty string will clear any previously saved tokens
export function setToken(token) {
  if (token != '' && !tokenIsValid(token)) {
    // Bad token
    throw "Invalid API token, cannot save.";
  }

  // Update in-memory cache
  memoryToken = token;

  // Update local storage
  AsyncStorage.setItem('/api/token', token);
}


// Fetch the locally stored API token. Return the owner or FALSE if token is invalid.
export async function getLocalTokenOwner() {
  // Fetch the locally stored token (if any)
  let token = await getToken('local');
  if (!token) return false; // Invalid/No token

  // Decode token
  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (e) {
    // Decode failed, must be invalid
    return false;
  }

  // Token valid, return owner
  return (decodedToken.sub > 0) ? 'user' : false;
}


// Loop through each endpoint and setup
let api = {};
ENDPOINTS.forEach(function(value, key) {
  api[key] = new apiEndpoint(value);
});

export default api;
