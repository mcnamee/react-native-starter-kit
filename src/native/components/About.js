import React from 'react';
import { View } from 'react-native';
import { Text, H3, Button } from 'native-base';

import AppStyles from '../styles/styles';

const About = () => (
  <View style={[AppStyles.container, { paddingHorizontal: 15 }]}>
    <H3>About</H3>
    <Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>
    <Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>
    <Button><Text>Hello</Text></Button>
  </View>
);

export default About;
