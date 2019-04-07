import * as FirebaseModule from 'firebase';
import firebaseConfig from '../constants/firebase';

const {
  apiKey, authDomain, databaseURL, storageBucket, messagingSenderId,
} = firebaseConfig;

let firebaseInitialized = false;

if (apiKey && authDomain && databaseURL && storageBucket && messagingSenderId) {
  FirebaseModule.initializeApp({
    apiKey, authDomain, databaseURL, storageBucket, messagingSenderId,
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? FirebaseModule.database().ref() : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
