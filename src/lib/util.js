/**
 * Global Util Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

const striptags = require('striptags');
const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

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

  /**
    * Decode HTML Entites
    */
  htmlEntitiesDecode: str => entities.decode(str),

  /**
    * Convert all HTMLEntities when Array
    */
  convertHtmlEntitiesArray: (arr) => {
    const finalArr = arr;

    if (arr instanceof Array) {
      arr.forEach((item, key) => {
        if (item instanceof Array) {
          finalArr[key] = UTIL.convertHtmlEntitiesArray(item);
        } else if (typeof item === 'object') {
          finalArr[key] = UTIL.convertHtmlEntitiesObject(item);
        } else if (typeof item === 'string') {
          finalArr[key] = entities.decode(striptags(item));
        }
      });
    }

    return finalArr;
  },

  /**
    * Convert all HTMLEntities when Object
    */
  convertHtmlEntitiesObject: (obj) => {
    const finalObj = obj;

    if (typeof obj === 'object' && !(obj instanceof Array)) {
      Object.keys(obj).forEach((key) => {
        const item = obj[key];

        if (item instanceof Array) {
          finalObj[key] = UTIL.convertHtmlEntitiesArray(item);
        } else if (typeof item === 'object') {
          finalObj[key] = UTIL.convertHtmlEntitiesObject(item);
        } else if (typeof item === 'string') {
          finalObj[key] = entities.decode(striptags(item));
        }
      });
    }

    return finalObj;
  },

  /**
    * Strips all HTML tags
    */
  stripTags: str => striptags(str),
};

/* Export ==================================================================== */
module.exports = UTIL;
module.exports.details = {
  title: 'UTIL',
};
