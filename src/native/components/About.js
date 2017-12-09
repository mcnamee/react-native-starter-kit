import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import AppStyles from '../styles/styles';

const About = () => (
  <View style={AppStyles.container}>
    <Text h4>About</Text>
    <Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>
    <Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>
  </View>
);

export default About;
