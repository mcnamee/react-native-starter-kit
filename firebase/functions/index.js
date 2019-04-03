/**
 * React Native Starter Kit - Firebase Cloud Functions
 * - A collection of example cloud functions to use with this project
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-kit
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

/**
  * Creates a full name attribute based on the first and last names
  */
exports.makeUserFullName = functions.database.ref('/users/{userId}').onWrite((change) => {
  if (!change.after.exists()) return null; // Exit when the data is deleted.

  // The current value of what was written to the Realtime Database.
  const original = change.after.val();

  const fullName = `${original.firstName} ${original.lastName}`;
  return change.after.ref.child('fullName').set(fullName);
});

/**
  * Adds a 'user' role to all new users on create
  */
exports.addUserRole = functions.database.ref('/users/{userId}')
  .onCreate(snapshot => snapshot.ref.parent.child('role').set('user'));

/**
  * Listens for user deletion and
  * - deletes the user's reference in the database
  */
exports.deleteUserData = functions.auth.user()
  .onDelete(user => admin.database().ref(`/users/${user.uid}`).remove());
