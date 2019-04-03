# Firebase Cloud Functions

[Learn more](https://firebase.google.com/docs/functions/) about this tool.

This repo comes with a couple of handy examples, to get you up and running. You can find out what they do by [reading the comments](/firebase-cloud-functions/functions/index.js).

## Deploy

Once you've setup a Firebase account + project:

```
# Install the Firebase-Cli on your computer
npm install -g firebase-tools

# Install the Node dependencies
( cd functions ; yarn )

# Login to Firebase
firebase login

# Initialise the project
firebase init functions

# Deploy
firebase deploy --only functions
```
