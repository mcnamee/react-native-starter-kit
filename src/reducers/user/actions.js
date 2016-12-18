/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import jwtDecode from 'jwt-decode';

import AppAPI from '../../utils/api';

export function login(credentials, freshLogin) {
  return dispatch => new Promise(async (resolve, reject) => {
    const userCreds = credentials || null;

    // Force logout, before logging in
    if (freshLogin && AppAPI.deleteToken) await AppAPI.deleteToken();

    if (!AppAPI.getToken) return resolve();

    // Get a new token from API
    return AppAPI.getToken(userCreds)
      .then((token) => {
        let decodedToken = '';

        try {
          decodedToken = jwtDecode(token);
        } catch (err) {
          return reject('Token decode failed.');
        }

        if (
          !decodedToken || !decodedToken.data ||
          !decodedToken.data.user || !decodedToken.data.user.id
        ) {
          return reject('Token decode failed.');
        }

        // Get user details from API, using my token
        return AppAPI.users.get(decodedToken.data.user.id)
          .then((userData) => {
            dispatch({
              type: 'USER_REPLACE',
              data: userData,
            });

            return resolve(userData);
          }).catch(err => reject(err));
      }).catch(err => reject(err));
  });
}

export function logout() {
  return dispatch => AppAPI.deleteToken()
    .then(() => {
      dispatch({
        type: 'USER_REPLACE',
        data: {},
      });
    });
}
