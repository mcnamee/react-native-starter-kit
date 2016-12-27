/**
 * API JWT Auth Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
 /* global fetch console */

 /* Setup ==================================================================== */
import {
  AsyncStorage,
} from 'react-native';
import jwtDecode from 'jwt-decode';

// App Globals
import AppAPI from '@lib/api';
import AppConfig from '@constants/config';

export default class JWT {
  static apiToken = ''
  apiCredentials = {}

  /**
    * Authenticate
    */
  getToken = credentials => new Promise(async (resolve, reject) => {
    // Check any existing tokens - if still valid, use it, otherwise login
    const apiToken = this.getStoredToken ? await this.getStoredToken() : false;
    if (apiToken) return resolve(apiToken);

    // Use credentials or AsyncStore Creds?
    if (credentials && typeof credentials === 'object' && credentials.username && credentials.password) {
      this.apiCredentials.username = credentials.username;
      this.apiCredentials.password = credentials.password;

      // Save new Credentials to AsyncStorage
      await AsyncStorage.setItem('api/credentials', JSON.stringify(this.apiCredentials));

    // Check if credentials are in AsyncStorage
    } else {
      await this.getStoredCredentials();
    }

    // No credentials, we can't do anything
    if (!this.apiCredentials || !this.apiCredentials.username || !this.apiCredentials.password) {
      return reject({
        data: { status: 403 },
        message: 'Credentials missing (JWT.getToken).',
      });
    }

    // Let's try logging in
    return AppAPI.login.post(null, {
      username: this.apiCredentials.username,
      password: this.apiCredentials.password,
    }).then(async (res) => {
      if (!res.token) {
        return reject(res);
      }

      const tokenIsNowValid = this.tokenIsValid ? await this.tokenIsValid(res.token) : undefined;
      if (!tokenIsNowValid) return reject(res);

      // Set token in AsyncStorage + memory
      if (this.storeToken) await this.storeToken(res.token);

      return resolve(res.token);
    }).catch(err => reject(err));
  })

  /**
    * Retrieves Token from Storage
    */
  getStoredToken = async () => {
    if (!this.apiToken) this.apiToken = await AsyncStorage.getItem('api/token');
    const validToken = this.apiToken ? await this.tokenIsValid(this.apiToken) : false;
    if (this.apiToken && !validToken) this.apiToken = null;

    return this.apiToken;
  }

  /**
    * Retrieves Stored Login Credentials from Storage
    */
  getStoredCredentials = async () => {
    let storedCredsStr = '';
    if (!this.apiCredentials) storedCredsStr = await AsyncStorage.getItem('api/credentials');
    const storedCreds = storedCredsStr ? JSON.parse(storedCredsStr) : false;

    if (storedCreds && typeof storedCreds === 'object' && storedCreds.username && storedCreds.password) {
      this.apiCredentials = storedCreds;
    }

    return this.apiCredentials;
  }

  /**
    * Adds Token to AsyncStorage
    */
  storeToken = async (token) => {
    await AsyncStorage.setItem('api/token', token);
    this.apiToken = token;
  }

  /**
    * Deletes Token and saved credentials
    * Used for logout
    */
  deleteToken = async () => {
    await AsyncStorage.setItem('api/token', '');
    await AsyncStorage.setItem('api/credentials', '');
    this.apiToken = '';
  }

  /**
    * Tests whether a token is valid
    */
  tokenIsValid = (token, userId = null) => {
    let decodedToken;
    try {
      decodedToken = jwtDecode(token);
    } catch (e) {
      // Decode failed, must be invalid
      return false;
    }

    const NOW = (Date.now() / 1000) || 0; // current UTC time in whole seconds
    const eagerRenew = 60; // number of seconds prior to expiry that a token is considered 'old'

    // Validate against 'expiry', 'not before' and 'sub' fields in token
    if (NOW > (decodedToken.exp - eagerRenew)) return false; // Expired
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
  }
}
