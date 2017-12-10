import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleColor } from '../actions/colors';

const Container = ({ Layout, dispatch, colors }) => (
  <Layout
    onPress={() => dispatch(toggleColor())}
    color={colors.color}
  />
);

Container.propTypes = {
  Layout: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  colors: PropTypes.shape({ color: PropTypes.string.isRequired }).isRequired,
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Container);
