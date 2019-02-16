# Deploying & Publishing

## 🖥 Web

### Packaging for Web

```bash
yarn web-bundle
```

Creates an optimized bundle that you can deploy, in `/build`. You can serve this with any static file server.

```bash
yarn deploy
```

Uses `gh-pages` to bundle the optimized version of the website and deploys directly to Github Pages (the gh-pages git branch).

---

## 📱 React Native

### Publishing to Expo's React Native Community for testing

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `expo` command-line tool, and run the publish command:

```bash
npm install -g expo-cli
expo publish
```

### Deploying to the App / Play Store https://docs.expo.io/versions/latest/introduction/already-used-react-native.html#deploying-to-the-app--play-store

Check out [Expo's docs](https://docs.expo.io/versions/latest/introduction/already-used-react-native.html#deploying-to-the-app--play-store).

### Building an Expo "standalone" app for the app store

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.
