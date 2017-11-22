import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import AppStyles from '../styles/styles';

import Home from '../components/Home';

import { toggleColor } from '../../actions/actions';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  }

  render() {
    const { dispatch, color, data } = this.props;

    return (
      <View style={AppStyles.container}>
        <Home
          onPress={() => dispatch(toggleColor())}
          color={color}
        />
      </View>
    );
  }
}

const select = state => state;
export default connect(select)(App);
