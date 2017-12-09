import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';

import AppStyles from '../styles/styles';

const Home = ({ onPress, color }) => (
  <View style={AppStyles.container}>
    <Text h4 onPress={onPress} style={{ color, textAlign: 'center' }}>
      Tap Me
    </Text>
  </View>
);

Home.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Home;
