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
  // var AppConfig = require('../config.ios');

  // Screens / Pages
  // var AnotherPage = require('./tabbar.ios');

  // Components
  var Button = require('../components/button.ios');

  var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Component
  } = React;

/* ==============================
  View
  =============================== */
  var ComingSoon = React.createClass({

    /**
      * Navigates to page from menu
      */
    navigate: function(navbar_title) {
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
            onPress={()=>this.navigate(placeholderText)} />
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