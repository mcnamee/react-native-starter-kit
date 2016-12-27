/**
 * Navbar Elements
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes, Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';

// App Globals
import AppStyles from '@constants/styles';
import AppConfig from '@constants/config';
import AppUtil from '@lib/util';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Navbar
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  // Button
  navbarButton: {
    left: 20,
    top: 4,
  },

  // Title
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

/* Navbar Left Button Component ========================================================= */
class Navbar extends Component {
  render() {
    console.log('NAVBAR PROPS');
    console.log(this.props);

    const title = this.props.title || AppConfig.appName;

    let leftButtonIcon = 'ios-menu';
    let leftButtonAction = Actions.pop();

    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    if (this.props.index > 0) {
      leftButtonIcon = 'ios-arrow-back-outline';
      leftButtonAction = Actions.pop();
    }

    const leftButton = {
      onPress: leftButtonAction,
      icon: leftButtonIcon,
    };

    return (
      <NavigationBar
        title={<NavbarTitle title={title || null} />}
        statusBar={{ style: 'light-content', hidden: false }}
        style={[styles.navbar]}
        tintColor={AppConfig.theme.primaryColor}
        leftButton={
          <NavbarLeftButton
            onPress={leftButton.onPress}
            icon={leftButton.icon}
          />
        }
      />
    );
  }
}

Navbar.propTypes = {};

exports.Navbar = Navbar;
