import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, H3 } from 'native-base';

import AppStyles from '../styles/styles';

const Error = ({ title, content }) => (
  <View style={AppStyles.container}>
    <H3>{title}</H3>
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
