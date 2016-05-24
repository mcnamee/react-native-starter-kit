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
  import React, { Component } from 'react';
  import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

  // App Globals
  import AppStyles from '../styles.ios';
  // import AppConfig from '../config.ios';

  // Screens / Pages
  // import AnotherPage from './tabbar.ios';

  // Components
  import Button from '../components/button.ios';

/* ==============================
  View
  =============================== */
  var ComingSoon = React.createClass({

    /**
      * Navigates to page from menu
      */
    _navigate: function(navbar_title) {
      this.props.navigator.push({
        title: navbar_title, 
        component: ComingSoon, 
        index: 2
      });
    },

    /**
      * RENDER
      */
    render() {
      var placeholderText = this.props.placeholder;
      if(!placeholderText) { placeholderText = 'Coming soon...'; }

      // Done
      return (
        <View style={[AppStyles.container, AppStyles.containerCentered]}>
          <Text style={[AppStyles.baseText, AppStyles.p]}>
            {placeholderText}
          </Text>

          <View style={[AppStyles.spacer_10]} />

          <Button
            text={'Tap to test the back button'}
            style={'outlined'}
            onPress={()=>this._navigate(placeholderText)} />
        </View>
      );
    }

  });

/* ==============================
  Styles
  =============================== */
  /*var styles = StyleSheet.create({
  });*/

/* ==============================
  Done!
  =============================== */
  module.exports = ComingSoon;
  module.exports.details = {
    title: 'ComingSoon'
  };