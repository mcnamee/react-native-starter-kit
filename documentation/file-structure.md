## File structure

- `/android` - contains native code specific to the Android OS
- `/documentation` - as the name suggests - any docs
- `/fastlane` - configuration for auto-deploying the app to the app stores via Fastlane
- `/ios` - native code specific to iOS
- `/native-base-theme` - the app uses Native Base for base elements. You can edit the styles in here
- `/src` - contains our JS and CSS code. `index.js` is the entry-point for our file, and is mandatory.
    - `/components` - 'Dumb-components' / presentational. [Read More &rarr;](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
    - `/constants` - App-wide variables
    - `/containers` - 'Smart-components' that connect business logic to presentation [Read More &rarr;](https://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
    - `/images` - hmm...what could this be?
    - `/lib` - Utils and custom libraries
    - `/models` - Rematch models combining actions, reducers and state. [Read More &rarr;](https://github.com/rematch/rematch#step-2-models)
    - `/routes`- wire up the router with any & all screens [Read More &rarr;](https://github.com/aksonov/react-native-router-flux)
    - `/store`- Redux Store - hooks up the stores and provides initial/template states [Read More &rarr;](https://redux.js.org/docs/basics/Store.html)
    - `/tests` - contains all of our tests, where the test file matches the resptive file from `/src`
    - `index.js` - The starting place for our app
