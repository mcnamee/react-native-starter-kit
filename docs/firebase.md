# Get Started with Firebase

We've created a quick little "API server" on [Google's Firebase Platform](https://firebase.google.com/). You can get your own API up and running within minutes too:

1. Signup for a [Firebase account](https://firebase.google.com/)
1. Create a new project - eg. "React Native Starter App"
1. Enable email/password __Authentication__ under the 'Sign-in method' tab.
1. Create a __Realtime Database__, and import the `firebase-sample-data.json` file found in this repo using the hamburger menu on the top right.
1. Get the Firebase project's API credentials, and add them to the respective variables in your `/src/constants/firebase.js` file. You can get your projects details from Firebase by clicking on 'Authentication' on the left, underneath 'Develop' > select 'Web setup'.
1. Add the following __rules__ to the Database

```json
{
  "rules": {
    ".read": false,
    ".write": false,

    "meals": {
      ".read": true
    },

    "recipes": {
      ".read": true,
    	".indexOn": ["category"]
    },

    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid",

        "firstName": { ".validate": "newData.isString() && newData.val().length > 0" },
        "lastName": { ".validate": "newData.isString() && newData.val().length > 0" },
        "lastLoggedIn": { ".validate": "newData.val() <= now" },
        "signedUp": { ".validate": "newData.val() <= now" },
        "role": {
          ".validate": "(root.child('users/'+auth.uid+'/role').val() === 'admin' && newData.val() === 'admin') || newData.val() === 'user'"
        }
      }
    },

    "favourites": {
    	"$uid": {
      	".read": "auth != null && auth.uid == $uid",
      	".write": "auth != null && auth.uid == $uid"
    	}
  	}
  }
}
```

Want to experiment even more with Firebase? Check out the [Firebase Cloud Functions](/firebase/README.md)
