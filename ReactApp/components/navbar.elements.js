/**
 * Navbar Elements
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'
import AppUtil from '../util'


/* Navbar Title Component ==================================================================== */
class NavbarTitle extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  }

  render = () => {
    let title = this.props.title || AppConfig.appName;
    title = AppUtil.limitChars(title, 25);

    return (
      <Text style={[AppStyles.baseText, styles.navbarTitle]}>{title}</Text>
    );
  }
}

exports.Title = NavbarTitle;


/* Navbar Left Button Component ==================================================================== */
class NavbarLeftButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    icon: React.PropTypes.string.isRequired,
  }

  render = () => {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7} 
        style={styles.navbarButton}
        hitSlop={{top: 7, right: 7, bottom: 7, left: 7}}>
        <Icon name={this.props.icon} size={34} color={"#FFF"} />
      </TouchableOpacity>
    );
  }
}

exports.LeftButton = NavbarLeftButton;

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
