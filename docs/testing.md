# Testing

## Linting (with eslint)

Want to check if your code is formatted consistently + pick up on any syntax errors:

```
./node_modules/.bin/eslint "src/**/*.js"
```

## Jest Snapshots

Run `npm test` to run a test add `-- --watch` to run it in developer mode.

To run an individual Jest test:
* Run `jest path/to/test.js` if you have Jest installed globally
* Run `node_modules/.bin/jest path/to/test.js` to use the projects Jest installation

Tests should be placed in their related parents folder to keep consistency, i.e __components/\_\_tests\_\___ or __containers/\_\_tests\_\___

- (Snapshot testing) https://facebook.github.io/jest/docs/tutorial-react-native.html#snapshot-test
- (DOM testing WIP) https://facebook.github.io/jest/docs/tutorial-react.html#dom-testing
