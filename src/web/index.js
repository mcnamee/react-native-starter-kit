/* global document */
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from '../store/index';
import registerServiceWorker from './registerServiceWorker';

// load our css
require('./styles/style.scss');

const store = configureStore();
const rootElement = document.getElementById('root');

render(<Root store={store} />, rootElement);
registerServiceWorker();
