/**
 * React Native Starter Kit - Firebase Cloud Functions
 * - A collection of example cloud functions to use with this project
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

/**
  * Listens for updates to /users/:userId and creates an
  * full name attribute based on the first and last names
  */
exports.cleanUserData = functions.database.ref('/users/{userId}').onWrite((event) => {
  console.log('Making Full Name for UserID:', event.params.userId);

  // Get the first and last names
  const firstName = event.data._newData.firstName || '';
  const lastName = event.data._newData.lastName || '';

  const userData = {
    fullName: `${firstName} ${lastName}`,
  };

  // Add Role if it doesn't already exist
  if (event && event.data && event.data._data && !event.data._newData.role) {
    userData.role = 'user';
  }

  return event.data.ref.update(userData);
});

/**
  * Listens for user deletion and
  * - deletes the user's reference in the database
  */
exports.deleteUserData = functions.auth.user().onDelete((event) => {
  const uid = event.data.uid;
  return admin.database().ref(`/users/${uid}`).remove();
});
