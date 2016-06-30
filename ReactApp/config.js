/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import Dimensions from 'Dimensions';

/* Setup ==================================================================== */
exports.title = 'GlobalConfig';

/* Default Styles ==================================================================== */
// Window Dimensions
var window = Dimensions.get('window');
exports.windowHeight = window.height;
exports.windowWidth = window.width;

// Grid
exports.windowWidthHalf = window.width * 0.5;
exports.windowWidthYhird = window.width * 0.333;
exports.windowWidthYwoThirds = window.width * 0.666;
exports.windowWidthQuarter = window.width * 0.25;
exports.windowWidthThreeQuarters = window.width * 0.75;

// General Element Dimensions
var navbarHeight = 64;
exports.navbarHeight = navbarHeight;
exports.statusBarHeight = 22;

// Fonts
exports.baseFont = 'Avenir';
exports.baseFontSize = 14;

// Colors
exports.primaryColor = "#4099FF";
exports.textColor = "#555";
exports.borderColor = "#E7E7E7";