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
  Image,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'


/* Navbar Title Component ==================================================================== */
class NavbarTitle extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  }

  render = () => {
    return (
      <Text style={[AppStyles.baseText, AppStyles.strong, styles.navbarTitle]}>{this.props.title || 'Starter Kit'}</Text>
    );
  }
}

exports.Title = NavbarTitle;


/* Navbar Left Button Component ==================================================================== */
class NavbarLeftButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    image: React.PropTypes.number.isRequired,
  }

  render = () => {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7}>
        <Image source={this.props.image} style={styles.navbarButton} />
      </TouchableOpacity>
    );
  }
}

exports.LeftButton = NavbarLeftButton;

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  navbarButton: {
    width: 26,
    height: 26,
    left: 20,
    top: 9,
    tintColor: '#FFFFFF'
  },
  navbarTitle: {
    color: '#FFFFFF',
    bottom: 6,
    fontSize: 13,
  },
});
