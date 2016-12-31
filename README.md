![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/rnsk-logo.jpg "React Native Starter Kit")

# React Native Starter Kit

React Native Starter Kit helps you get started with React Native. It contains a bunch of helpful components, building blocks and basic structure to allow you to jump straight into building an app.

---

## Screenshots

Coming soon...

---

## Docs

1. [Features](#features)
1. [Getting Started with React Native](/docs/react-native.md)
1. [React Native Quick Tips](/docs/quick-tips.md)
1. [Getting Started with RNSK](#getting-started)
1. [Understanding the File Structure](#understanding-the-file-structure)
1. [Opinions Guiding this Project](/docs/opinions.md)
1. [Routing / Navigating](/src/navigation/README.md)
1. [Using Google Analytics](/docs/google-analytics.md)
1. [Interacting with a REST API](/docs/api.md)
1. [Testing](/docs/testing.md)
1. [Contributing](/docs/contributing.md)
1. [Licence](LICENSE)

---

## Features

| Feature | Summary |
| --- | --- |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) | Router for React Native based on new React Native Navigation API. <br>[How to Guide](/src/navigation/README.md)|
| [API Example](/docs/api.md) | A basic example showing how you can interact with a RESTful API with user authentication (JWT). |
| [Sidebar / Hamburger Menu](https://github.com/react-native-community/react-native-side-menu) | ... |
| [React Native Elements](https://github.com/react-native-community/react-native-elements) | Cross Platform React Native UI Toolkit. |
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). <br>[Setup Guide](/docs/google-analytics.md) |
| [Icons](https://github.com/oblador/react-native-vector-icons) | Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Form Validation](https://github.com/gcanti/tcomb-form-native) | An exmaple on how to create forms with validation. |
| Component Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| Code Linting / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. <br>[Get started with linting for React Native .](https://medium.com/pvtl/linting-for-react-native-bdbb586ff694) |
| An example directory/file structure I've found useful for scaling apps | [Learn more](#understanding-the-file-structure) |

---

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for the platform/s of choice
1. Clone this project `git clone https://github.com/mcnamee/react-native-starter-app.git`
1. Run `npm install` from root directory
1. Start the app in [an emulator](/docs/quick-tips.md#running-in-an-emulator)

---

## Understanding the File Structure

- `/android` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The native Android stuff
- `/ios` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The native iOS stuff
- `/src` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Contains the full React Native App codebase
  - `/components` &nbsp;- 'Dumb-components' / presentational. [Read More](/src/components/README.md)
  - `/constants` &nbsp; - App-wide variables and config
  - `/containers` &nbsp;- 'Smart-components' / the business logic. [Read More](/src/containers/README.md)
  - `/images` &nbsp; &nbsp; &nbsp;- Self explanatory right?
  - `/lib` &nbsp; &nbsp; &nbsp; &nbsp; - Utils, custom libraries, functions
  - `/navigation` &nbsp;- Routes - wire up the router with any & all screens. [Read More](/src/navigation/README.md)
  - `/redux` &nbsp; &nbsp; &nbsp; - Redux Reducers & Actions grouped by type. [Read More](/src/redux/README.md)
  - `/theme` &nbsp; &nbsp; &nbsp; - Theme specific variables



