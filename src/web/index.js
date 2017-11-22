import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from '../store/configureStore';

// load our css
require('./styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
