/**
 * Global Util Functions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

// React Plugins
// import React, { Component } from 'react';

var UTIL = {
	/**
	  * Test if Obj is empty
	  */
	objIsEmpty: function(obj) {
	  for(var prop in obj) {
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
	  for (var a in obj) return a;
	},
};

/* ==============================
  Done!
  =============================== */
  module.exports = UTIL;
  module.exports.details = {
    title: 'UTIL'
  };