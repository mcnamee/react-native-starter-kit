/**
 * Loading Screen
 *
     <Loading text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Spacer, Text } from '@ui/';

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

    <Spacer size={10} />

    {!!text && <Text>{text}</Text>}
  </View>
);

Loading.propTypes = { text: PropTypes.string, transparent: PropTypes.bool };
Loading.defaultProps = { text: null, transparent: false };
Loading.componentName = 'Loading';

/* Export Component ==================================================================== */
export default Loading;
