import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Router from '../navigation/index';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
