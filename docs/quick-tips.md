# React Native Quick Tips

## Running in an Emulator

### iOS

- Open the /ios/StarterKit.xcodeproj file in Xcode
- Select the iOS simulator then press the Play (triangle) icon at the top left

### Android

- From terminal, run `android avd`. This will open the Android Virtual Device Manager. Select a device to open. 
- In a new terminal window, enter the root directory of the project, then run: `react-native run-android`

## Running on Device

- [iOS Guide](https://facebook.github.io/react-native/docs/running-on-device-ios.html)
- [Android Guide](https://facebook.github.io/react-native/docs/running-on-device-android.html)

## Opening the Debug Menu

- **iOS** - CMD + D
- **Android** - CMD + M

## Reload

- **iOS** - CMD + R
- **Android** - Double tap R on your keyboard 

## App Icons

- [Generate the Icons](https://makeappicon.com/)
  - **iOS** - Place the contents into: `/ios/StarterKit/Images.xcassets/AppIcon.appiconset`
  - **Android** - Place the contents into: `/android/app/src/main/res/mipmap-*/ic_launcher.png`
