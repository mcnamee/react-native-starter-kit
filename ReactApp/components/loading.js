/**
 * Loading Screen
 *
     <Loading text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

// App Globals
import AppStyles from '../styles';

/* Component ==================================================================== */
const Loading = ({ text, transparent }) => (
  <View
    style={[
      AppStyles.container,
      AppStyles.containerCentered,
      transparent && { backgroundColor: 'rgba(255,255,255,0.75)' },
    ]}
  >
    <ActivityIndicator
      animating
      size={'large'}
      color={transparent ? '#000' : '#AAA'}
    />

    <View style={[AppStyles.spacer_10]} />

    {text &&
      <Text style={[AppStyles.baseText]}>
        {text}
      </Text>
    }
  </View>
);

Loading.propTypes = {
  text: PropTypes.string,
  transparent: PropTypes.bool,
};

/* Export Component ==================================================================== */
export default Loading;
