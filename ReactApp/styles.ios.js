/**
 * Global App Styles
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise App
  =============================== */
  /* Plugins */
  var React = require('react-native');
  var C = require('./config.ios');

  var {
    StyleSheet,
  } = React;

/* ==============================
  Styles
  =============================== */
  module.exports = StyleSheet.create({
  	appContainer: {
  	},

  	/* Default */
  	container: {
  	  position: 'relative',
  	  flex: 1,
  	  backgroundColor: '#FFFFFF',
      height: C.windowHeight,
      width: C.windowWidth,
  	},
  	containerCentered: {
  		justifyContent: 'center',
  		alignItems: 'center',
  	},

	  /* Text Styles */
	  baseText: {
	  	color: "#666666",
	  	fontFamily: "Avenir-Medium",
	  },
	  h1: {
	  },
	  h2: {
	  },
	  h3: {
	  },
	  p: {
	  },

	  /* Font Weights */
	  fontWeight_normal: {
	  	fontFamily: "Avenir-Medium",
	  },
	  fontWeight_bold: {
	  	fontFamily: "Avenir-Heavy",
      fontWeight: '500',
	  },
	  fontWeight_black: {
	  	fontFamily: "Avenir-Black",
      fontWeight: '900',
	  },

	  /* Helper Text Styles */
	  centered: {
	  	textAlign: 'center',
	  },

	  /* Nav Bar */
	  navbar: {
	    backgroundColor: "#4099FF",
	    borderBottomWidth: 1,
	    borderBottomColor: C.subtleGreyBorder,
	  },
    navbar_button: {
      width: 26,
      height: 26,
      left: 20,
      top: 30,
      tintColor: '#FFFFFF'
    },
    navbar_title: {
      color: '#FFFFFF',
      bottom: 10,
      fontSize: 13,
    },
  });