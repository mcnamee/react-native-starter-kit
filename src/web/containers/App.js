import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';

// Actions
import {
  toggleColor,
} from '../../actions/colors';

const App = ({ dispatch, colors }) => (
  <div className="react-native-web">
    <Header />
    <HelloWorld
      onClick={() => dispatch(toggleColor())}
      color={colors.color}
    />
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  colors: PropTypes.shape({ color: PropTypes.string.isRequired }).isRequired,
};

const select = state => state;

export default connect(select)(App);
