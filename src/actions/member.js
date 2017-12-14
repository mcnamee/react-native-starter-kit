import ErrorMessages from '../constants/errors';
import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Return error when Firebase isn't setup
  */
// const firebaseInvalid = () => new Promise((resolve, reject) =>
//   reject(new Error({ message: ErrorMessages.invalidFirebase })));

/**
  * Add error to redux
  */
const showError = (dispatch, errorMessage) => new Promise(() => dispatch({
  type: 'USER_ERROR',
  data: errorMessage || ErrorMessages.invalidFirebase,
}));

/**
  * Add loading state to redux
  */
// const showLoading = dispatch => new Promise(() => dispatch({ type: 'USER_LOADING' }));

/**
  * Sign Up to Firebase
  */
export function signUp(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
  } = formData;

  return dispatch => new Promise((resolve, reject) => {
    // Validation checks
    if (!firstName) return reject({ message: ErrorMessages.missingFirstName });
    if (!lastName) return reject({ message: ErrorMessages.missingLastName });
    if (!email) return reject({ message: ErrorMessages.missingEmail });
    if (!password) return reject({ message: ErrorMessages.missingPassword });
    if (!password2) return reject({ message: ErrorMessages.missingPassword });
    if (password !== password2) return reject({ message: ErrorMessages.passwordsDontMatch });

    // Go to Firebase
    return Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Send user details to Firebase database
        if (res && res.uid) {
          FirebaseRef.child(`users/${res.uid}`).set({
            firstName,
            lastName,
            signedUp: Firebase.database.ServerValue.TIMESTAMP,
            lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
          }).then(resolve);
        }
      }).catch(reject);
  }).catch((err) => { showError(dispatch, err.message); throw err.message; });
}

/**
  * Get this User's Details
  */
function getUserData(dispatch) {
  if (Firebase === null) return showError(dispatch);

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  const ref = FirebaseRef.child(`users/${UID}`);

  return ref.on('value', (snapshot) => {
    const userData = snapshot.val() || [];

    return dispatch({
      type: 'USER_DETAILS_UPDATE',
      data: userData,
    });
  });
}

/**
  * Login to Firebase with Email/Password
  */
export function login(email, password, verifyEmail = false) {
  return async dispatch => Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      if (res && res.uid) {
        // Update last logged in data
        FirebaseRef.child(`users/${res.uid}`).update({
          lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
        });

        // Send verification Email - usually used on first login
        if (verifyEmail) {
          Firebase.auth().currentUser
            .sendEmailVerification()
            .catch(() => console.log('Verification email failed to send'));
        }

        // Get User Data
        getUserData(dispatch);
      }

      // Send to Redux
      return dispatch({
        type: 'USER_LOGIN',
        data: res,
      });
    }).catch((err) => { showError(dispatch, err); });
}

/**
  * Reset Password
  */
export function resetPassword(email) {
  return async dispatch => Firebase.auth()
    .sendPasswordResetEmail(email)
    .catch((err) => { showError(dispatch, err); });
}

/**
  * Update Profile
  */
export function updateProfile(formData = {}) {
  if (Firebase === null) return showError();

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  const email = formData.Email || '';
  const firstName = formData.FirstName || '';
  const lastName = formData.LastName || '';

  // Set the email against user account
  return async dispatch => Firebase.auth()
    .currentUser
    .updateEmail(email)
    .then(() => {
      // Then update user in DB
      FirebaseRef.child(`users/${UID}`).update({
        firstName, lastName,
      });
    }).catch((err) => { showError(dispatch, err); });
}

/**
  * Logout
  */
export function logout() {
  if (Firebase === null) return showError();

  return dispatch => Firebase.auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'USER_LOGOUT' });
    }).catch((err) => { showError(dispatch, err); });
}
