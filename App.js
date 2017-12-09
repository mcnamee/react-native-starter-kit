import React from 'react';
import Root from './src/native/containers/Root';
import configureStore from './src/store/configureStore.js';

const store = configureStore();

export default function App() {
  return <Root store={store} />;
}
