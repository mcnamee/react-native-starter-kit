import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppColors from '../constants/colors';
import AppStyles from '../styles/styles';

const About = () => (
  <View style={AppStyles.container}>
    <ActivityIndicator size="large" color={AppColors.brand.primary} />
  </View>
);

export default About;
