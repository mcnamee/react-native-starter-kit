/**
 * Global Util Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
const UTIL = {
  /**
    * Test if Obj is empty
    */
  objIsEmpty: (obj) => {
    if (typeof obj === 'object' && !(obj instanceof Array)) {
      if (Object.keys(obj).length === 0) return true;
    }
    return false;
  },

  /**
    * Convert Obj to Arr
    */
  objToArr: obj => Object.keys(obj).map(k => obj[k]),

  /**
    * Limit characters, placing a ... at the end
    */
  limitChars: (str, limit = 15) => {
    if (str.length > limit) return `${str.substr(0, limit).trim()} ...`;
    return str;
  },
};

/* Export ==================================================================== */
module.exports = UTIL;
module.exports.details = {
  title: 'UTIL',
};
