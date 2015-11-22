/**
 * Global DB Functions
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

  // 3rd Party Components
  var RNDBModel = require('react-native-db-models');

  // App Globals
  var AppConfig = require('./config.ios');
  var AppUtil = require('./util.ios');

  var {
  } = React;

/* ==============================
  Module Variables
  =============================== */
  var cacheExpiresIn = 300 * 1000; // 300 = 5mins, 3600 = 1hr, 6hrs = 21600
  var debug = false;

/* ==============================
  Functions
  =============================== */
  var DB = {
    /**
      * Tables
      * - Add your DB tables here
      */
    "settings": new RNDBModel.create_db('settings'),
    "example": new RNDBModel.create_db('example'),
  };

/* ==============================
  Done!
  =============================== */
  module.exports = DB;
  module.exports.details = {
    title: 'DB'
  };