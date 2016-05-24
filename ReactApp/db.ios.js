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
  // React
  // import React, { Component } from 'react';

  // 3rd Party Components
  import RNDBModel from 'react-native-db-models';

  // App Globals
  // import AppConfig from './config.ios';
  // import AppUtil from './util.ios';

/* ==============================
  Module Variables
  =============================== */
  // var cacheExpiresIn = 300 * 1000; // 300 = 5mins, 3600 = 1hr, 6hrs = 21600
  // var debug = false;

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