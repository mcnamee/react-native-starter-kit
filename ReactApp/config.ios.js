/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise Component
  =============================== */
  /* Plugins */
  var React = require('react-native');

  /* React Plugins */
  var Dimensions = require('Dimensions');

  var {
    Component,
  } = React;

/* ==============================
  Export App Options
  =============================== */
  exports.title = 'GlobalConfig';

/* ===============================
  Default Style Variables 
  =============================== */
  var window = Dimensions.get('window');
  exports.windowHeight = window.height;
  exports.windowWidth = window.width;

  // Grid
  exports.grid_half = window.width * 0.5;
  exports.grid_third = window.width * 0.333;
  exports.grid_twoThirds = window.width * 0.666;
  exports.grid_quarter = window.width * 0.25;
  exports.grid_threeQuarters = window.width * 0.75;

  // Navbar
  exports.navbarHeight = 63;

