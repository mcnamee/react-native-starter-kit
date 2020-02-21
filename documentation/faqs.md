# FAQs

## Code Style Guide?

We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. We just like it :)

## React, hah? How do I?

[React Native Express](http://www.reactnativeexpress.com/) is a great site to get you started, specifically:

- [Get your head around ES6](http://www.reactnativeexpress.com/es6)
- [What is JSX?](http://www.reactnativeexpress.com/jsx)
- [What are Components?](http://www.reactnativeexpress.com/components)
- [React State](http://www.reactnativeexpress.com/data_component_state)
- [Redux](http://www.reactnativeexpress.com/redux)
- [Rematch](https://rematch.gitbooks.io/rematch/)

Once you've got your head around the basics, checkout the [React Native](https://facebook.github.io/react-native/) and [React](https://reactjs.org/) websites, specifically

- Go through ['The Basics'](https://facebook.github.io/react-native/docs/props.html)
- Gain an understanding of the [components](https://facebook.github.io/react-native/docs/activityindicator.html) React Native provides out of the box

## How do I change the Reach Native App Icon?

You might want to change the app icons for iOS and Android. You can use the [app-icon](https://github.com/dwmkerr/app-icon) utility to generate all of the required icons for each required size.

```bash
npx app-icon generate -i ./src/images/app-icon.png
```

This will generate the icon in all required sizes. You can also add labels to icons, which can be useful for testing. This example labels the icon with 'beta' and the current version number:

```bash
npx app-icon label -i ./src/images/app-icon.png -o temp.png --top beta --bottom $(jq .version package.json)
npx app-icon generate -i temp.png
```

![Icon Labelled with Beta and Version Number](./icon-label.png)

## How do I change the React Native App Name/Bundle ID?

  - Use [react-native-rename](https://www.npmjs.com/package/react-native-rename)
      - eg. `npx react-native-rename "The Facebook" -b com.thefacebook.mobile-app`
  - Open the project in Xcode and double check that the Bundle ID has been updated (if not, correct it)
