React Native Starter Kit
=======

| | | | |
|---|---|---|---|
| ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native.png "React Native") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/redux-logo.png "Redux") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/apple-logo.jpg "iOS Ready") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/android-logo.jpg "Android Ready") |
| | | | |

### Features

| Feature | Summary |
|---|---|
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [Sidebar/Hamburger Menu](https://github.com/Kureev/react-native-side-menu) | ... |
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). |
| [Custom Navbar](https://github.com/Kureev/react-native-navbar) | ... |
| [Icons](https://github.com/oblador/react-native-vector-icons) | Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Form Validation](https://github.com/gcanti/tcomb-form-native) | An exmaple on how to create forms with validation. |
| Data persistence | Shows how to persist data, even after closing/reopening the app. |
| Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| An example directory/file structure I've found useful for scaling apps | ... |


### Screenshots

| | | |
|---|---|---|
| ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app.png "Default Screen w/ tabs") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-open-menu.png "Sidebar Menu open") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-forms.png "Data validation and persistence") |
| ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-listview.png "List View Example") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-listview2.png "List View Example 2") | ![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/react-native-starter-app-style-guide.png "Style Guide") |
| | | |

### Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for the platform/s of choice
2. Clone this project
3. Run `npm install` from root directory

### Testing
1. `npm run test`

### Quick Tips

| Function | iOS | Android |
|---|---|---|
| **Testing project in an emulator** | <ol><li>Open the /ios/StarterKit.xcodeproj file in Xcode</li><li>Select the iOS simulator then press the Play (triangle) icon at the top left</li></ul> | <ol><li>From terminal, run `android avd`. This will open the Android Virtual Device Manager. Select a device to open. </li><li>In a new terminal window, enter the root directory of the project, then run: `react-native run-android`</li></ul> |
| **Running on Device** | [iOS Guide](https://facebook.github.io/react-native/docs/running-on-device-ios.html) | [Android Guide](https://facebook.github.io/react-native/docs/running-on-device-android.html) |
| **Opening the Debug Menu** | CMD + D | CMD + M |
| **Reload** | CMD + R | Double tap R on your keyboard |
| **App Icons** [I use this tool to generate](https://makeappicon.com/) | /ios/StarterKit/Images.xcassets/AppIcon.appiconset | /android/app/src/main/res/mipmap-*/ic_launcher.png |

### Any advice?

Love to hear any feedback or tips to improve - submit an issue or PR.
