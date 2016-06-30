/**
 * Global DB Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import RNDBModel from 'react-native-db-models';

var cacheExpiresIn = 300 * 1000; // 300 = 5mins, 3600 = 1hr, 6hrs = 21600
const debug = false;

const DB = {
  /**
    * Tables
    * - Add your DB tables here
    */
  "settings": new RNDBModel.create_db('settings'),
};

/* Export ==================================================================== */
module.exports = DB;
module.exports.details = {
  title: 'DB'
};