/**
 * First Load
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
    StatusBar,
  } from 'react-native';

  // App Globals
  import AppStyles from '../styles.ios';
  import AppConfig from '../config.ios';

  // Screens / Pages
  import ComingSoon from './soon.ios';

  // Components
  import Button from '../components/button.ios';

/* ==============================
  View
  =============================== */
  var FirstLoad = React.createClass({

    /**
      * On Load
      */
    componentWillMount: function() {
      StatusBar.setHidden(true, 'slide');
    },

    /**
      * When it unmounts
      */
    componentWillUnmount: function() {
      StatusBar.setHidden(false, 'slide');
    },

  	/**
  	  * Navigates to Sign Up
  	  */
  	_navigate: function() {
  	  this.props.navigator.push({
  	    title: 'Sign Up', 
  	    component: ComingSoon, 
  	    index: 2
  	  });
  	},

    /**
      * RENDER
      */
    render() {
      return (
        <View style={[AppStyles.container, styles.containerCover]}>
        	<View style={[AppStyles.paddingHorizontal]}>
	          <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
	            Sign Up Now!
	          </Text>

	          <View style={[AppStyles.spacer_10]} />

	          <View style={[AppStyles.grid_row]}>
	          	<View style={[AppStyles.grid_half, AppStyles.paddingRightSml]}>
			          <Button
			            text={'Sign In/Up Now'}
			            onPress={()=>this._navigate()} />
	            </View>

	            <View style={[AppStyles.grid_half, AppStyles.paddingLeftSml]}>
			          <Button
			            text={'Skip'}
			            style={'outlined'}
			            onPress={()=>this.props.navigator.pop()} />
	        		</View>
        		</View>
        	</View>
        </View>
      );
    }

  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
  	containerCover: {
  		marginTop: -AppConfig.navbarHeight,
  		backgroundColor: "#FFF",
  		justifyContent: 'center',
  	},
  });

/* ==============================
  Done!
  =============================== */
  module.exports = FirstLoad;
  module.exports.details = {
    title: 'FirstLoad'
  };