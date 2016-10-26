/**
 * Global Util Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

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
	  * Decode HTML Entites
	  */
	HTMLEntitiesDecode: function(str) {
		return entities.decode(str);
	},

	/**
	  * Convert all HTMLEntities when Array
	  */
	convertHtmlEntitiesArray: function(arr) {
	  arr.forEach(item => {
	    if (typeof item === 'object') {
	      item = UTIL.convertHtmlEntitiesObject(item);
	    } else if (typeof item === 'array') {
	    	item = UTIL.convertHtmlEntitiesArray(item);
	    } else {
	    	item = entities.decode(item);
	    }
	  });

	  return arr;
	},

	/**
	  * Convert all HTMLEntities when Object
	  */
	convertHtmlEntitiesObject: function(obj) {
	  Object.keys(obj).forEach(key => {
      let item = obj[key];

      if (typeof item === 'object') {
        obj[key] = UTIL.convertHtmlEntitiesObject(item);
      } else if (typeof item === 'array') {
      	obj[key] = UTIL.convertHtmlEntitiesArray(item);
      } else {
      	obj[key] = entities.decode(item);
      }
    });

    return obj;
	},
};

/* Export ==================================================================== */
module.exports = UTIL;
module.exports.details = {
  title: 'UTIL'
};