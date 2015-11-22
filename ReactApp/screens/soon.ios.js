/**
 * Coming Soon
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* ==============================
  Initialise Component
  =============================== */
  // React
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  /* Screens / Pages */
  // var AnotherPage = require('./tabbar.ios');

  var {
    StyleSheet,
    View,
    Text,
    Component
  } = React;

/* ==============================
  View
  =============================== */
  var ComingSoon = React.createClass({

    /**
      * Navigates to page from menu
      */
    navigate: function() {
      this.props.navigator.push({
        title: "Shopping Cart", 
        component: ComingSoon, 
        index: 2
      });
    },

    /**
      * RENDER
      */
    render() {
      var placeholderText = this.props.placeholder;
      if(placeholderText == undefined) { placeholderText = 'Coming soon...'; }
      return (
        <View style={[AppStyles.container, AppStyles.containerCentered]}>
          <Text style={[AppStyles.baseText, AppStyles.p]}>
            {placeholderText}
          </Text>
          <Text onPress={this.navigate}>
            This will replace a screen to test the back button
          </Text>
        </View>
      );
    }

  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
  });

/* ==============================
  Done!
  =============================== */
  module.exports = ComingSoon;
  module.exports.details = {
    title: 'ComingSoon'
  };