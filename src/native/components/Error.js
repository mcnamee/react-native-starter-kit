import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import AppStyles from '../styles/styles';

const Error = ({ title, content }) => (
  <View style={AppStyles.container}>
    <Text h4>{title}</Text>
    <Text>{content}</Text>
  </View>
);

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Error.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
};

export default Error;
