/* eslint-disable max-len */
module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-clone-referenced-element?/.*|react-navigation|redux-persist|native-base(-shoutem-theme)|native-base|react-native-router-flux|@react-native-community/async-storage))',
  ],
};
