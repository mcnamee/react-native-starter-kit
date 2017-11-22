import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';

export default class HelloWorld extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
  }

  render() {
    const { onPress, color } = this.props;

    return (
      <View>
        <Text h4 onPress={onPress} style={{ color: color, textAlign: 'center' }}>
          Tap Me
        </Text>
      </View>
    );
  }
}
