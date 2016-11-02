/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { AsyncStorage } from 'react-native';

import Api, { buildPayload, getLocalTokenOwner, setToken, } from '../api';

export function login(credentials, differentUser = true) {
  return (dispatch) => {
    // Reset app state
    // The customer credentials in AsyncStorage will soon be overridden.
    // Keep API token. It will be re-used or a fresh one fetched.
    dispatch({
      type: 'RESET',
    });

    // Save customer login details into local storage
    return AsyncStorage.setItem('/customer/credentials', JSON.stringify(credentials))
      .then(() => getLocalTokenOwner()) // Get owner of local token (if any)
      .then((owner) => {
        if (owner !== 'user') {
          // Fetch a new authenticated token
          const payload = buildPayload('authenticate', null, credentials);

          return Api.login.post(null, payload)
            .then((response) => {
              setToken(response.data.token);
            });
            // Now go to next step

        } else if (owner === false) {
          // Token invalid? Delete it for good measure.
          setToken('');
        }

        return; // Skip to next step
      })
      .then(() => {
        // Fetch customer details
        return Api.users.get('me');
      })
      .then((response) => {
        // Login Success
        dispatch({
          type: 'USER_REPLACE',
          data: response.data,
        });
      })
      .catch((response) => {
        if (response.hasOwnProperty('httpStatus')) {
          if (response.httpStatus == 403) {
            // Re-used token was bad. Wipe it.
            setToken('');

          } else if (response.httpStatus == 400) {
            // Login details were incorrect. Wipe them.
            AsyncStorage.removeItem('/customer/credentials');
          }
        }

        // Re-throw error
        throw response;
      });
  }
}

export function logout() {
  // Wipe customer login details from local storage
  AsyncStorage.removeItem('/customer/credentials');

  // Wipe API token
  setToken('');

  // Wipe entire redux state
  return {
    type: 'RESET',
  }
}
