/**
 * Icons
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/**
  * =============================
  Initialise Component
  =============================== */
  // Ract
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  var {
    View,
    Image,
    Component,
    TouchableOpacity,
  } = React;

  /**
    * Custom 'Menu' button component
    */
  class MenuIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
            source={require('image!hamburger')}
            style={AppStyles.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.MenuIcon = MenuIcon;

  /**
    * Custom 'Back' button component
    */
  class BackIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
            source={require('image!back_button')}
            style={AppStyles.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.BackIcon = BackIcon;