/**
 * Coming Soon
 *
    <ComingSoon text={"Hello World"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

// App Globals
import AppStyles from '@config/styles';

/* Component ==================================================================== */
const ComingSoon = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text style={[AppStyles.baseText, AppStyles.p]}>
      {text}
    </Text>
  </View>
);

ComingSoon.propTypes = { text: PropTypes.string };
ComingSoon.defaultProps = { text: 'Coming soon...' };
ComingSoon.componentName = 'ComingSoon';

/* Export Component ==================================================================== */
export default ComingSoon;
