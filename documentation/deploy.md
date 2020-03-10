# 🚀 Deploying

## Setting up a new app:

The following steps should be followed for new projects. Once completed for your project, you won't need these steps again.

*General*

1. Ensure you have admin access to the destination Google Play and Apple/iTunesConnect Developer accounts
1. Ensure you've named your app correctly and set a unique bundle identifier:
    - Use [react-native-rename](https://www.npmjs.com/package/react-native-rename)
        - eg. `react-native-rename "Travel App" -b com.junedomingo.travelapp`
    - Open the project in Xcode and double check that the Bundle ID has been updated (if not, correct it)
1. In both Google Play and iTunes Connect:
    - Setup a new app
    - Use the _manual_ method below to build and deploy the app for the first time
        - _iOS Note: when you deploy the iOS app for the first time, you'll select 'Automatic Key Management'. Xcode will generate a private distribution key. Ensure you save this (eg. to a password safe) so that others can distribute the app too_

*Android*

1. Generate/configure Android key:
    - `( cd android/app && keytool -genkeypair -v -keystore android-release-key.keystore -alias jims-app-release-key -keyalg RSA -keysize 2048 -validity 10000 )` (note: change `jims-app-release-key` to your own alias)
    - Save the key to a secure password safe (don't commit it to the repo)
1. [Setup the Gradle variables](https://reactnative.dev/docs/signed-apk-android#setting-up-gradle-variables), using the alias and password/s (that you set in the previous command) in: `android/gradle.properties`
1. [Add the release signing config to your app's Gradle config](https://reactnative.dev/docs/signed-apk-android#adding-signing-config-to-your-apps-gradle-config) in: `android/app/build.gradle`

*Fastlane*

1. Using the __account owner's__ login (i.e. we want to create the API credentials from the owner's account) - follow the [steps here](https://docs.fastlane.tools/actions/supply/#setup) to generate API credentials for Google Play. Download and place the json file here: `android/app/google-play-android-developer.json`. Save the key to a secure password safe (don't commit it to the repo)
1. Update the `package_name` and `itc_team_id` (App Store Connect Team ID) in `faslane/Appfile` to match the bundle of your app
1. Update the following in `fastlane/Fastfile`:
    - `app_identifier: com.app.bundle` - where com.app.bundle is your bundle id
    - `name.xcodeproj` - to the name of your Xcode project file
    - `scheme: 'name'` - where name is your scheme (eg. AppName)
1. Run `fastlane supply init` (which will download the meta data of the uploaded app, from the stores)

---

## Configuring your machine to deploy:

The following steps are provided for developers who have the project setup on their machine, but have not yet deployed the app. Follow these once, and you won't need these steps again.

1. Android (Google Play):
    - Add the Android keys (found in the password safe) to your local project:
        - `android/app/android-release-key.keystore`
        - `android/app/google-play-android-developer.json`
    - [Android/Google dependencies](https://facebook.github.io/react-native/docs/getting-started#installing-dependencies-1)
1. iOS (Apple iTunes Connect):
    - In Xcode, login to the appropriate account to give you access to deploy
    - Install the appropriate distribution private key (found in your password safe)
        - Download the file and double click it to add to Keychain
1. Fastlane (for automated deployments on both platforms):
    - Install Fastlane - `brew cask install fastlane`
    - Install Xcode command line tools - `xcode-select --install`

---

## Deploying

- Update the __app version__ - `bash fastlane/update-app-version.sh`
- __Merge__ `develop` branch into `master` branch with a _merge commit_
- Git __Tag__ the master merge commit. The tag name should be the new version number
- Bundle and deploy by the following:

### 1.0 (Automated) Fastlane

Fastlane automatically builds and deploys the app to the app stores (TestFlight and Play Store Beta).

 1. _Hint: Did you update the version number, merge to master and tag?_
 1. __iOS__: Deploy to Apple TestFlight - `fastlane ios beta`
 1. __Android__: Deploy to Google Play Beta - `fastlane android beta`

### 2.0 Manual

*2.2.1 iOS*

_*Note: it may be required to use the legacy build system (XCode -> File -> Project Settings -> Change the build system to 'Legacy Build System')_

1. _Hint: Did you update the version number, merge to master and tag?_
1. Ensure you've changed the Xcode 'Build Config' to Release
1. Select 'Generic iOS Device' from devices
1. Product > Archive
1. Open Organiser
    - Find the archive and click 'Validate' to check that it's ok
    - Click the big 'Upload to App Store...' when ready (untick BitCode checkbox)

*2.2.2 Android*

1. _Hint: Did you update the version number, merge to master and tag?_
1. `( cd android && ./gradlew app:bundleRelease )`
1. Upload the generated file (`/android/app/build/outputs/bundle/release/app.aab`) to Google Play
