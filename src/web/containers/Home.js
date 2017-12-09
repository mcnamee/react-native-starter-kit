import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from '../components/Home';

import { toggleColor } from '../../actions/colors';

const Container = ({ dispatch, colors }) => (
  <Home
    onClick={() => dispatch(toggleColor())}
    color={colors.color}
  />
);

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  colors: PropTypes.shape({ color: PropTypes.string.isRequired }).isRequired,
};

const select = state => state;
export default connect(select)(Container);
