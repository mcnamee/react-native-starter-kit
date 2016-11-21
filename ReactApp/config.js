/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
/* global __DEV__ */
import {
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

/* Setup ==================================================================== */
exports.title = 'GlobalConfig';

const AppConfig = {
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
    ['recipes', '/wp-json/wp/v2/recipes'],
    ['meals', '/wp-json/wp/v2/recipe_meal'],
  ]),

  // URLs
  urls: {
    resetPassword: 'http://wp-api.mcnam.ee/wp-login.php?action=lostpassword',
    signUp: 'http://wp-api.mcnam.ee/wp-login.php?action=register',
  },

  // Default Error Messages
  errors: {
    default: 'Hmm, an unknown error occured.',
    timeout: 'Server Timed Out. Check your internet connection.',
  },

  // Fonts
  baseFont: 'Avenir',
  baseFontSize: 14,

  // Colors
  primaryColor: '#0069FF',
  secondaryColor: '#17233D',
  textColor: '#222222',
  borderColor: '#D0D1D5',
  backgroundColor: '#E9EBEE',

  // Other Styles
  borderRadius: 2,
};

/* react-native-elements Default Props ================================== */
// Button - default
AppConfig.buttonDefaults = {
  backgroundColor: AppConfig.primaryColor,
  fontFamily: AppConfig.baseFont,
  fontSize: 16,
  borderRadius: AppConfig.borderRadius,
  buttonStyle: {
    padding: 12,
    marginLeft: 0,
    marginRight: 0,
  },
};

// Button - Small
AppConfig.smlButtonDefaults = {
  ...AppConfig.buttonDefaults,
  fontSize: 14,
  buttonStyle: {
    ...AppConfig.buttonDefaults.buttonStyle,
    padding: 8,
  },
};

// Card
AppConfig.cardDefaults = {
  containerStyle: {
    borderRadius: AppConfig.borderRadius,
  },
};

/* Export ==================================================================== */
module.exports = AppConfig;
module.exports.details = {
  title: 'AppConfig',
};
