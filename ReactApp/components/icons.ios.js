/**
 * Icons
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise Component
  =============================== */
  /* Generic Plugins */
  var React = require('react-native');
  var S = require('../styles.ios');
  var C = require('../config.ios');

  var {
    View,
    Image,
    Component,
    TouchableOpacity,
  } = React;

  /* Custom 'Menu' button component */
  class MenuIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
            source={require('image!hamburger')}
            style={S.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.MenuIcon = MenuIcon;

  /* Custom 'Back' button component */
  class BackIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
            source={require('image!back_button')}
            style={S.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.BackIcon = BackIcon;