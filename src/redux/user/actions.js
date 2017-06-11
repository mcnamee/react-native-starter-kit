/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import AppAPI from '@lib/api';

/**
  * Login to API and receive Token
  */
export function login(credentials, freshLogin) {
  return dispatch => new Promise(async (resolve, reject) => {
    const userCreds = credentials || null;

    // Force logout, before logging in
    if (freshLogin && AppAPI.deleteToken) await AppAPI.deleteToken();

    if (!AppAPI.getToken) return resolve();
    // Get a new token from API
    return AppAPI.getToken(userCreds)
      // Get user details from API, using my token
      .then(() => AppAPI.me.post()
        .then((userData) => {
          dispatch({
            type: 'USER_REPLACE',
            data: userData,
          });

          return resolve(userData);
        }).catch(err => reject(err)),
      ).catch(err => reject(err));
  });
}

/**
  * Sign Up to API and receive Token
  */
export function signUp(credentials) {
  return () => new Promise(async (resolve, reject) => {
    AppAPI.signup.post(null, credentials)
      .then(() => resolve())
    .catch(err => reject(err));
  });
}

/**
  * Logout
  */
export function logout() {
  return dispatch => AppAPI.deleteToken()
    .then(() => {
      dispatch({
        type: 'USER_REPLACE',
        data: {},
      });
    });
}
