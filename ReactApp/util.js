/**
 * Global Util Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

var striptags = require('striptags');
var Entities = require('html-entities').AllHtmlEntities;
var entities = new Entities();

const UTIL = {
	/**
	  * Test if Obj is empty
	  */
	objIsEmpty: function(obj) {
	  for(let prop in obj) {
	    if(obj.hasOwnProperty(prop))
	      return false;
	  }
	  return true;
	},

	/**
	  * Convert Obj to Arr
	  */
	objToArr: function(obj) {
	  return Object.keys(obj).map(function(k) { return obj[k] });
	},

	/**
	  * Get First Item in Object
	  */
	firstIndexInObj: function(obj) {
	  for (let a in obj) return a;
	},

	/**
	  * Limit characters, placing a ... at the end
	  */
	limitChars: function(str, limit = 15) {
	  if (str.length > limit) return str.substr(0, limit).trim() + '...';
	  else return str;
	},

	/**
	  * Decode HTML Entites
	  */
	HTMLEntitiesDecode: function(str) {
		return entities.decode(str);
	},

	/**
	  * Convert all HTMLEntities when Array
	  */
	convertHtmlEntitiesArray: function(arr) {
		if (item instanceof Array) {
		  arr.forEach(item => {
		    if (item instanceof Array) {
	      	obj[key] = UTIL.convertHtmlEntitiesArray(item);
	      } else if (typeof item === 'object') {
	        obj[key] = UTIL.convertHtmlEntitiesObject(item);
	      } else if (typeof item === 'string') {
	      	obj[key] = entities.decode(striptags(item));
	      }
		  });
	  }

	  return arr;
	},

	/**
	  * Convert all HTMLEntities when Object
	  */
	convertHtmlEntitiesObject: function(obj) {
		if (typeof obj === 'object' && !(item instanceof Array)) {
		  Object.keys(obj).forEach(key => {
	      let item = obj[key];

	      if (item instanceof Array) {
	      	obj[key] = UTIL.convertHtmlEntitiesArray(item);
	      } else if (typeof item === 'object') {
	        obj[key] = UTIL.convertHtmlEntitiesObject(item);
	      } else if (typeof item === 'string') {
	      	obj[key] = entities.decode(striptags(item));
	      }
	    });
		}

    return obj;
	},

	/**
	  * Strips all HTML tags
	  */
	stripTags: function(str) {
		return striptags(str);
	}
};

/* Export ==================================================================== */
module.exports = UTIL;
module.exports.details = {
  title: 'UTIL'
};