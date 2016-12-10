/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import jwtDecode from 'jwt-decode';

import AppAPI from '../../utils/api';

export function login(credentials, freshLogin) {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      const userCreds = credentials || null;

      // Force logout, before logging in
      if (freshLogin) await AppAPI.logout();

      AppAPI.authenticate(userCreds)
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

          return AppAPI.users.get(decodedToken.data.user.id)
            .then((userData) => {
              dispatch({
                type: 'USER_REPLACE',
                data: userData,
              });

              resolve(userData);
            }).catch((err) => {
              reject(err);
            });
        }).catch(err => reject(err));
    });
  };
}

export function logout() {
  return (dispatch) => {
    return AppAPI.logout()
      .then(() => {
        dispatch({
          type: 'USER_REPLACE',
          data: {},
        });
      });
  };
}
