/**
 * Button
 *
    <Button 
      text={text}
      style={'outlined'}
      onPress={()=>{alert('Go To Entry View')}} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* ==============================
  Initialise App
  =============================== */
  // React Plugins
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } = React;

/* ==============================
  View
  =============================== */
  var Button = React.createClass({
    /**
      * When user clicks Row
      */
    onPress: function() {
      if(this.props.onPress) this.props.onPress();
    },

    /**
      * RENDER
      */
    render: function(){
      return (
        <TouchableOpacity 
          style={[styles.formButton, this.props.style == 'outlined' ? styles.formButtonOutline : null]}
          onPress={this.onPress}
          activeOpacity={0.7}>
          <Text style={[AppStyles.baseText, styles.formButton_text, this.props.style == 'outlined' ? styles.formButtonOutline_text : null]}>
            {this.props.text ? this.props.text : 'Click Here'}
          </Text>
        </TouchableOpacity>
      )
    },

  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
    // Standard
    formButton: {
      backgroundColor: AppConfig.primaryColor,
      height: 50,
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    formButton_text: {
      color: "#FFF",
      textAlign: 'center',
      fontSize: 15,
      fontFamily: AppConfig.baseFont,
      fontWeight: '800',
    },

    // Outlined
    formButtonOutline: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: AppConfig.primaryColor,
    },
    formButtonOutline_text: {
      color: AppConfig.primaryColor,
    },
  });

/* ==============================
  Done!
  =============================== */
  module.exports = Button;
  module.exports.details = {
    title: 'Button'
  };