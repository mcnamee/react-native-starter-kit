import { errorMessages } from '../constants/messages';
import { Firebase, FirebaseRef } from '../lib/firebase';

export default {
  state: {}, // initial state
  reducers: {
    // handle state changes with pure functions
    setUserLogin(state, payload) {
      const { uid, email, emailVerified } = payload;
      return {
        ...state,
        uid,
        email,
        emailVerified,
      };
    },

    setUserDetails(state, payload) {
      const {
        firstName, lastName, signedUp, role,
      } = payload;
      return {
        ...state,
        firstName,
        lastName,
        signedUp,
        role,
      };
    },

    resetUser() {
      return {};
    },

  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    signUp(formData) {
      const {
        email, password, password2, firstName, lastName,
      } = formData;

      return new Promise(async (resolve, reject) => {
        // Validation rules
        if (!firstName) return reject({ message: errorMessages.missingFirstName });
        if (!lastName) return reject({ message: errorMessages.missingLastName });
        if (!email) return reject({ message: errorMessages.missingEmail });
        if (!password) return reject({ message: errorMessages.missingPassword });
        if (!password2) return reject({ message: errorMessages.missingPassword });
        if (password !== password2) return reject({ message: errorMessages.passwordsDontMatch });

        // Go to Firebase
        return Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((res) => {
            // Send user details to Firebase database
            if (res && res.user.uid) {
              FirebaseRef.child(`users/${res.user.uid}`).set({
                firstName,
                lastName,
                signedUp: Firebase.database.ServerValue.TIMESTAMP,
                lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
              }).then(resolve);
            }
          }).catch(reject);
      }).catch((err) => { throw err.message; });
    },

    /**
      * Get this User's Details
      */
    getUserData() {
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

        this.setUserDetails(userData);
      });
    },

    getMemberData() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      // Ensure token is up to date
      return () => new Promise((resolve) => {
        Firebase.auth().onAuthStateChanged((loggedIn) => {
          if (loggedIn) {
            return resolve(this.getUserData(dispatch));
          }

          return () => new Promise(() => resolve());
        });
      });
    },

    /**
      * Login to Firebase with Email/Password
      */
    login(payload) {
      const { email, password } = payload;


      return new Promise(async (resolve, reject) => {
        // Validation rules
        if (!email || email.length === 0) return reject({ message: errorMessages.missingEmail });
        if (!password || password.length === 0) {
          return reject({ message: errorMessages.missingPassword });
        }

        // Go to Firebase
        return Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
          .then(() => Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (res) => {
              const userDetails = res && res.user ? res.user : null;
              if (userDetails.uid) {
                // Update last logged in data
                FirebaseRef.child(`users/${userDetails.uid}`).update({
                  lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
                });

                // Send verification Email when email hasn't been verified
                if (userDetails.emailVerified === false) {
                  Firebase.auth().currentUser.sendEmailVerification()
                    .catch(() => console.log('Verification email failed to send'));
                }

                // Get User Data from DB (different to auth user data)
                this.getUserData(dispatch);
              }

              return resolve(this.setUserLogin(userDetails));
            }).catch(reject));
      }).catch((err) => { throw err.message; });
    },

    /**
      * Reset Password
      */
    resetPassword(formData) {
      const { email } = formData;

      return () => new Promise(async (resolve, reject) => {
        // Validation rules
        if (!email) return reject({ message: errorMessages.missingEmail });

        // Go to Firebase
        return Firebase.auth().sendPasswordResetEmail(email)
          .then(() => resolve(this.resetUser()))
          .catch(reject);
      }).catch((err) => { throw err.message; });
    },

    /**
      * Update Profile
      */
    updateProfile(formData) {
      const {
        email, password, password2, firstName, lastName, changeEmail, changePassword,
      } = formData;

      console.log('form', formData);
      return new Promise(async (resolve, reject) => {
        // Are they a user?
        const UID = await Firebase.auth().currentUser.uid;
        if (!UID) return reject({ message: errorMessages.missingFirstName });

        // Validation rules
        if (!firstName) return reject({ message: errorMessages.missingFirstName });
        if (!lastName) return reject({ message: errorMessages.missingLastName });
        if (changeEmail) {
          if (!email) return reject({ message: errorMessages.missingEmail });
        }
        if (changePassword) {
          if (!password) return reject({ message: errorMessages.missingPassword });
          if (!password2) return reject({ message: errorMessages.missingPassword });
          if (password !== password2) return reject({ message: errorMessages.passwordsDontMatch });
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
            return resolve(this.getUserData(dispatch));
          }).catch(reject);
      }).catch((err) => { throw err.message; });
    },

    /**
      * Logout
      */
    logout() {
      return new Promise((resolve, reject) => Firebase.auth().signOut()
        .then(() => resolve(this.resetUser()))
        .catch(reject)).catch((err) => { throw err.message; });
    },

  }),
};
