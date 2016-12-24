![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/rnsk-logo.jpg "React Native Starter Kit")

# React Native Starter Kit

React Native Starter Kit helps you get started with React Native. It contains a bunch of helpful components, building blocks and basic structure to allow you to jump straight into building an app.

---

## TOC

1. [Features](#10-features)
2. [Screenshots](#20-screenshots)
3. [Getting Started / Installation](#30-getting-started)
4. [Testing](#40-testing)
5. [React Native Quick Tips](#50-quick-tips)
6. [Contributing](#60-contributing)
7. [Licence](#70-license)

---

## 1.0 Features

| Feature | Summary |
|---|---|
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| API Example | A basic example showing how you can interact with a RESTful API with user authentication (JWT). |
| [Sidebar / Hamburger Menu](https://github.com/react-native-community/react-native-side-menu) | ... |
| [React Native Elements](https://github.com/react-native-community/react-native-elements) | Cross Platform React Native UI Toolkit. |
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). |
| [Custom Navbar](https://github.com/react-native-community/react-native-navbar) | ... |
| [Icons](https://github.com/oblador/react-native-vector-icons) | Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Form Validation](https://github.com/gcanti/tcomb-form-native) | An exmaple on how to create forms with validation. |
| Component Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| Code Linting / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. [Get started with linting for React Native .](https://medium.com/pvtl/linting-for-react-native-bdbb586ff694) |
| An example directory/file structure I've found useful for scaling apps | [Learn more](#32-working-with-the-structure) |

---

## 2.0 Screenshots

| | | |
|---|---|---|
| ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app.png "Default Screen w/ tabs") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-open-menu.png "Sidebar Menu open") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-forms.png "Data validation and persistence") |
| ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-listview.png "List View Example") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-listview2.png "List View Example 2") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-style-guide.png "Style Guide") |
| | | |

---

## 3.0 Getting Started

### 3.1 Installation

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for the platform/s of choice
2. Clone this project
3. Run `npm install` from root directory

### 3.2 File Structure

```
  /android       <-- The native Android stuff
  /ios           <-- The native iOS stuff
  /src           <-- Contains the full React Native App codebase
    /components  <-- Presentational, state-less, 'dumb-components'
    /config      <-- App-wide config
    /containers  <-- The business logic, provides data to presentation
    /images      <-- Self explanatory right?
    /reducers    <-- Redux Reducers & Actions grouped by type
    /lib         <-- Utils, custom libraries, functions
```

---

## 4.0 Testing

- `npm run test`

*More testing coming soon...*

---

## 5.0 Quick Tips

| Function | iOS | Android |
|---|---|---|
| **Running in an Emulator** | <ol><li>Open the /ios/StarterKit.xcodeproj file in Xcode</li><li>Select the iOS simulator then press the Play (triangle) icon at the top left</li></ul> | <ol><li>From terminal, run `android avd`. This will open the Android Virtual Device Manager. Select a device to open. </li><li>In a new terminal window, enter the root directory of the project, then run: `react-native run-android`</li></ul> |
| **Running on Device** | [iOS Guide](https://facebook.github.io/react-native/docs/running-on-device-ios.html) | [Android Guide](https://facebook.github.io/react-native/docs/running-on-device-android.html) |
| **Opening the Debug Menu** | CMD + D | CMD + M |
| **Reload** | CMD + R | Double tap R on your keyboard |
| **App Icons** | <ol><li>[Generate an Icon](https://makeappicon.com/)</li><li>Place the contents into: `/ios/StarterKit/Images.xcassets/AppIcon.appiconset`</li></ol> | <ol><li>[Generate an Icon](https://makeappicon.com/)</li><li>Place the contents into: `/android/app/src/main/res/mipmap-*/ic_launcher.png`</li></ol> |

---

## 6.0 Contributing

Love to hear any feedback or tips to improve - submit an issue or a fix via a pull request.

Please ensure you're following the below rules before submitting a PR:

### 6.1 Naming Conventions

Please follow [Airbnb's Name Conventions](https://github.com/airbnb/javascript#naming-conventions) from the style guide.

### 6.2 File Structure

- Follow the file structure [outlined above](#32-file-structure)
- All files should be lowercase, with words separated by a fullstop - eg. `style.guide.js`
- All folder names should be lowercase, with words separated by a hyphen - eg. `/components/case-studies`
- Folders and files can be named singlular or plural - do what sounds right
- If there's more than 1 file in a directory that are related, group them within their own directory
 - eg. if I have 2 components: `/components/recipe.listing.js` and `/components/recipe.view.js`, create a new directory within components called `recipes` and put the 2 files within (removing `recipe.`). The result would be: `/components/recipes/listing.js` and `/components/recipes/view.js`

### 6.3 Linting

Please ensure you're code is passing the built in linter.

### 6.4 Tests

Please include tests with your code and ensure your code is passing the existing tests.

---

## 7.0 License

[MIT License](LICENSE)
