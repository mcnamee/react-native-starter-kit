/**
 * App Theme - Sizes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default {
  // Window Dimensions
  screen: {
    height: window.height,
    width: window.width,

    widthHalf: window.width * 0.5,
    widthThird: window.width * 0.333,
    widthTwoThirds: window.width * 0.666,
    widthQuarter: window.width * 0.25,
    widthThreeQuarters: window.width * 0.75,
  },
  
  navbarHeight: 64,
  statusBarHeight: 22,

  borderRadius: 2,
};
