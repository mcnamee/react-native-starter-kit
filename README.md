[![GitHub tag](https://img.shields.io/github/tag/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/mcnamee/react-native-starter-app/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/issues-pr)

![alt text](/docs/rnsk-logo.jpg "React Native Starter Kit")

# React Native Starter Kit

React Native Starter Kit helps you get started with React Native. It contains a bunch of helpful components, building blocks and basic structure to allow you to jump straight into building an app.

What's more, it's now integrated with [Firebase](https://firebase.google.com/), to help you kick start your next full-stack product.

![alt text](/docs/rnsk-screens.jpg "React Native Starter App")


## Available Scripts

### `npm start`

Runs your app in development mode - instructions will be provided in the terminal.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run web`

Kicks off a webpack server on port 3001, it utilizes hot reloading with some redux-time-machine-magic to have a crazy awesome dev experience where you can rewind and revert actions in your application.

In your browser, open http://localhost:3001

#### `npm run web-bundle`

Creates a minified JavaScript bundle (that also houses the minified css) and places it next to the index.html in web/public that you can serve with any static file server.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

### Ejecting from Create React Native App

If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running `npm run eject` in your project, which will walk you through the process. Make sure to install `react-native-cli` and follow the [native code getting started guide for React Native](https://facebook.github.io/react-native/docs/getting-started.html).
