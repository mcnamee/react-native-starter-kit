/**
 * Coming Soon
 *
    <ComingSoon text={"Hello World"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

/* Component ==================================================================== */
const ComingSoon = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text style={[AppStyles.baseText]}>
      {text}
    </Text>
  </View>
);

ComingSoon.propTypes = { text: PropTypes.string };
ComingSoon.defaultProps = { text: 'Coming soon...' };
ComingSoon.componentName = 'ComingSoon';

/* Export Component ==================================================================== */
export default ComingSoon;
