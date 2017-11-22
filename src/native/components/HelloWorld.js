import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    const { onPress, color } = this.props;
    const style = StyleSheet.create({
      helloWorld: {
        color: color,
        textAlign: 'center',
      }
    });
    return (
      <View>
        <Text onPress={onPress} style={style.helloWorld}>Hello World</Text>
      </View>
    );
  }
}

HelloWorld.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}
