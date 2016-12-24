/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
/* global __DEV__ */
import { Dimensions } from 'react-native';

import ErrorMessages from './errors';
import AppTheme from './theme';

const window = Dimensions.get('window');

/* Setup ==================================================================== */
const AppConfig = {
  // Import other config =========================================
  errors: { ...ErrorMessages },
  theme: { ...AppTheme },

  // Generic Configuration =======================================
  // App Details
  appName: 'Starter Kit',

  // Build Configuration - eg. Debug or Release?
  DEV: __DEV__,

  // Window Dimensions
  windowHeight: window.height,
  windowWidth: window.width,

  // Grid
  windowWidthHalf: window.width * 0.5,
  windowWidthYhird: window.width * 0.333,
  windowWidthYwoThirds: window.width * 0.666,
  windowWidthQuarter: window.width * 0.25,
  windowWidthThreeQuarters: window.width * 0.75,

  // General Element Dimensions
  navbarHeight: 64,
  statusBarHeight: 22,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: (__DEV__) ? 'UA-84284256-2' : 'UA-84284256-1',

  // API Details
  hostname: 'http://wp-api.mcnam.ee',
  // Map shortnames to the actual endpoints, so that we can
  // use them like AppAPI.recipes.get() or AppAPI.users.post() for example
  endpoints: new Map([
    ['login', '/wp-json/jwt-auth/v1/token'],
    ['users', '/wp-json/wp/v2/users'],
    ['me', '/wp-json/wp/v2/users/me'],
    ['recipes', '/wp-json/wp/v2/recipes'],
    ['meals', '/wp-json/wp/v2/recipe_meal'],
  ]),

  // URLs
  urls: {
    resetPassword: 'http://wp-api.mcnam.ee/wp-login.php?action=lostpassword',
    signUp: 'http://wp-api.mcnam.ee/wp-login.php?action=register',
  },
};

/* Export ==================================================================== */
module.exports = AppConfig;
module.exports.details = {
  title: 'AppConfig',
};
