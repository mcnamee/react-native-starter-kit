<img src="/documentation/rnsk-logo.jpg" alt="React Native Starter Kit" width="400" />

[![CryptoTip](https://img.shields.io/badge/Donate%20with-CryptoTip-blue.svg?style=flat&colorB=007bff)](https://cryptotip.it/p/mcnamee)  [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U7CE3LJYX859E)

---

# React Native App

### Looking for something else?

- [React (web) Starter Kit / Boilerplate](https://github.com/mcnamee/react-starter-kit)
- [Previous Version (React (Web + Native) Starter Kit w/ Firebase)](https://github.com/mcnamee/react-native-starter-kit/tree/archive/v3)

---

## 👋 Intro

This project was bootstrapped with the [React Boilerplate Builder](https://github.com/mcnamee/react-native-boilerplate-builder) by [Matt McNamee](https://mcnam.ee).

The project is _super_ helpful to kick-start your next project, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:

- __Flux architecture__
    - [Redux](https://redux.js.org/docs/introduction/)
    - Redux Wrapper: [Rematch](https://github.com/rematch/rematch)
- __Routing and navigation__
    - [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile navigation
- __Data Caching / Offline__
    - [Redux Persist](https://github.com/rt2zz/redux-persist)
- __UI Toolkit/s__
    - [Native Base](https://nativebase.io/) for native mobile
- __Code Linting__ with
    - [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines
- __Deployment strategy__
    - [Both manual and automated strategies](/documentation/deploy.md)
- __Splash Screen + Assets__
    - [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)

---

## 🚀 Getting Started

 - Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before running the app
 - Install `eslint`, `prettier` and `editor config` plugins into your IDE
 - Ensure your machine has the [React Native dependencies installed](https://facebook.github.io/react-native/docs/getting-started)

```bash
# Install dependencies
yarn install && ( cd ios && pod install )
```

#### iOS

```bash
# Open /ios/ReactNativeStarterKit.xcworkspace in Xcode
# Change to Use the legacy Build System: `File > Workspace Settings > Build System > Legacy Build System`

# Start in the iOS Simulator
npx react-native run-ios --simulator="iPhone 11"
```

#### Android

```bash
# Start in the Android Simulator
#  - Note: open Android Studio > Tools > AVD > Run a device
#  - Example device specs: https://medium.com/pvtl/react-native-android-development-on-mac-ef7481f65e47#d5da
npx react-native run-android
```

---

## 📖 Docs

- [Contributing to this project](/documentation/contributing.md)
- [FAQs & Opinions](/documentation/faqs.md)
- [Tests & testing](/documentation/testing.md)
- [Understanding the file structure](/documentation/file-structure.md)
- [Deploy the app](/documentation/deploy.md)

---

## 👊 Further Help?

This repo is a great place to start, but if you'd prefer to sit back and have your new project built for you, [get in touch with me directly](https://mcnam.ee) and I can organise a quote.
