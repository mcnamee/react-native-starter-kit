/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { AsyncStorage } from 'react-native';
import { Firebase } from '@constants/';
import * as RecipeActions from '../recipes/actions';

/**
  * Get Login Credentials from AsyncStorage
  */
async function getCredentialsFromStorage() {
  const values = await AsyncStorage.getItem('api/credentials');
  const jsonValues = JSON.parse(values);

  // Return credentials from storage, or an empty object
  if (jsonValues.email || jsonValues.password) return jsonValues;
  return {};
}

/**
  * Save Login Credentials to AsyncStorage
  */
async function saveCredentialsToStorage(email = '', password = '') {
  await AsyncStorage.setItem('api/credentials', JSON.stringify({ email, password }));
}

/**
  * Remove Login Credentials from AsyncStorage
  */
async function removeCredentialsFromStorage() {
  await AsyncStorage.removeItem('api/credentials');
}

/**
  * Login to Firebase with Email/Password
  */
export function login(inputEmail = '', inputPassword = '') {
  // Reassign variables for eslint ;)
  let email = inputEmail;
  let password = inputPassword;

  return async (dispatch) => {
    // When no credentials passed in, check AsyncStorage for existing details
    if (!email || !password) {
      const credsFromStorage = await getCredentialsFromStorage();
      if (!email) email = credsFromStorage.email;
      if (!password) password = credsFromStorage.password;
    }

    // Update Login Creds in AsyncStorage
    if (email && password) saveCredentialsToStorage(email, password);

    // We're ready - let's try logging them in
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        // Get Favourites
        RecipeActions.getFavourites(dispatch);

        // Send to Redux
        return dispatch({
          type: 'USER_LOGIN',
          data: res,
        });
      });
  };
}

/**
  * Sign Up to Firebase
  */
export function signUp(email, password) {
  return () => Firebase.auth()
    .createUserWithEmailAndPassword(email, password);
}

/**
  * Logout
  */
export function logout() {
  return dispatch => Firebase.auth()
    .signOut()
    .then(() => {
      removeCredentialsFromStorage();
      RecipeActions.resetFavourites(dispatch);
      dispatch({ type: 'USER_LOGOUT' });
    });
}
