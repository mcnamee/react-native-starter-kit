import ErrorMessages from '../constants/errors';
import { Firebase, FirebaseRef } from '../lib/firebase';

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
  const UID = (
    FirebaseRef
    && Firebase
    && Firebase.auth()
    && Firebase.auth().currentUser
    && Firebase.auth().currentUser.uid
  ) ? Firebase.auth().currentUser.uid : null;

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
export function login(formData) {
  const {
    email,
    password,
  } = formData;

  return dispatch => new Promise((resolve, reject) => {
    // Validation checks
    if (!email) return reject({ message: ErrorMessages.missingEmail });
    if (!password) return reject({ message: ErrorMessages.missingPassword });

    // Go to Firebase
    return Firebase.auth()
      .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
      .then(() =>
        Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            if (res && res.uid) {
              // Update last logged in data
              FirebaseRef.child(`users/${res.uid}`).update({
                lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
              });

              // Send verification Email when email hasn't been verified
              if (res.emailVerified === false) {
                Firebase.auth().currentUser
                  .sendEmailVerification()
                  .catch(() => console.log('Verification email failed to send'));
              }

              // Get User Data
              getUserData(dispatch);
            }

            // Send Login data to Redux
            return resolve(dispatch({
              type: 'USER_LOGIN',
              data: res,
            }));
          }).catch(reject));
  }).catch((err) => { showError(dispatch, err.message); throw err.message; });
}

/**
  * Reset Password
  */
export function resetPassword(formData) {
  const { email } = formData;

  return dispatch => new Promise((resolve, reject) => {
    // Validation checks
    if (!email) return reject({ message: ErrorMessages.missingEmail });

    // Go to Firebase
    return Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => resolve(dispatch({ type: 'USER_RESET' })))
      .catch(reject);
  }).catch((err) => { showError(dispatch, err.message); throw err.message; });
}

/**
  * Update Profile
  */
export function updateProfile(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
    changeEmail,
    changePassword,
  } = formData;

  return dispatch => new Promise((resolve, reject) => {
    // Are they a user?
    const UID = Firebase.auth().currentUser.uid;
    if (!UID) return reject({ message: ErrorMessages.missingFirstName });

    // Validation checks
    if (!firstName) return reject({ message: ErrorMessages.missingFirstName });
    if (!lastName) return reject({ message: ErrorMessages.missingLastName });
    if (changeEmail) {
      if (!email) return reject({ message: ErrorMessages.missingEmail });
    }
    if (changePassword) {
      if (!password) return reject({ message: ErrorMessages.missingPassword });
      if (!password2) return reject({ message: ErrorMessages.missingPassword });
      if (password !== password2) return reject({ message: ErrorMessages.passwordsDontMatch });
    }

    // Go to Firebase
    return FirebaseRef.child(`users/${UID}`).update({ firstName, lastName })
      .then(async () => {
        // Update Email address
        if (changeEmail) {
          await Firebase.auth().currentUser.updateEmail(email).catch(reject);
        }

        // Change the password
        if (changePassword) {
          await Firebase.auth().currentUser.updatePassword(password).catch(reject);
        }

        // Update Redux
        await getUserData(dispatch);
        resolve();
      }).catch(reject);
  }).catch((err) => { showError(dispatch, err.message); throw err.message; });
}

/**
  * Logout
  */
export function logout() {
  return dispatch => new Promise((resolve, reject) => {
    Firebase.auth().signOut()
      .then(() => resolve(dispatch({ type: 'USER_RESET' })))
      .catch(reject);
  }).catch((err) => { showError(dispatch, err.message); throw err.message; });
}
