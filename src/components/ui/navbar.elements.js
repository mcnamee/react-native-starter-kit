/**
 * Navbar Elements
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Globals
import AppStyles from '@config/styles';
import AppConfig from '@config/';
import AppUtil from '@lib/util';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  navbarButton: {
    left: 20,
    top: 4,
  },
  navbarTitle: {
    color: '#FFFFFF',
    bottom: 6,
    fontSize: 16,
  },
});

/* Navbar Title Component ==================================================================== */
const NavbarTitle = ({ title }) => {
  let text = title || AppConfig.appName;
  text = AppUtil.limitChars(text, 25);

  return (
    <Text style={[AppStyles.baseText, styles.navbarTitle]}>
      {text}
    </Text>
  );
};

NavbarTitle.propTypes = {
  title: PropTypes.string,
};

exports.Title = NavbarTitle;

/* Navbar Left Button Component ========================================================= */
const NavbarLeftButton = ({ onPress, icon }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={styles.navbarButton}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    <Icon name={icon} size={34} color={'#FFF'} />
  </TouchableOpacity>
);

NavbarLeftButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

exports.LeftButton = NavbarLeftButton;
