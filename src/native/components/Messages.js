import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';

import AppColors from '../constants/colors';

const Messages = ({ message, type }) => (
  <View style={{
      backgroundColor: (type === 'error') ? AppColors.danger : (type === 'success') ? AppColors.success : AppColors.info,
      paddingVertical: 10,
      paddingHorizontal: 5,
    }}
  >
    <Text style={{ color: '#fff', textAlign: 'center' }}>{message}</Text>
  </View>
);

Messages.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['error', 'success', 'info']),
};

Messages.defaultProps = {
  message: 'An unexpected error came up',
  type: 'error',
};

export default Messages;
