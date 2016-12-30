/**
 * App Theme - Fonts
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Platform } from 'react-native';

function lineHeight(fontSize) {
  return parseInt(fontSize + (fontSize * 0.5), 10);
}

const base = {
  size: 14,
  lineHeight: lineHeight(14),
  ...Platform.select({
    ios: {
      family: 'HelveticaNeue',
    },
    android: {
      family: 'Roboto',
    },
  }),
};

export default {
  base: { ...base },
  h1: { ...base, size: base.size * 1.75, lineHeight: lineHeight(base.size * 2) },
  h2: { ...base, size: base.size * 1.5, lineHeight: lineHeight(base.size * 1.75) },
  h3: { ...base, size: base.size * 1.25, lineHeight: lineHeight(base.size * 1.5) },
  h4: { ...base, size: base.size * 1.1, lineHeight: lineHeight(base.size * 1.25) },
  h5: { ...base },
};
