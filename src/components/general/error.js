/**
 * Error Screen
 *
    <Error text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Spacer, Text } from '@ui/';

/* Component ==================================================================== */
const Error = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Icon name={'ios-alert-outline'} size={50} color={'#CCC'} />

    <Spacer size={10} />

    <Text>{text}</Text>
  </View>
);

Error.propTypes = { text: PropTypes.string };
Error.defaultProps = { text: 'Woops, Something went wrong.' };
Error.componentName = 'Error';

/* Export Component ==================================================================== */
export default Error;
