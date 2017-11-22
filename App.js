import React, { Component } from 'react';
import Root from './src/native/containers/Root';
import configureStore from './src/store/configureStore.prod.js';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}
