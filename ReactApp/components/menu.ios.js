/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise Component
  =============================== */
  // React
  import React, { Component } from 'react';
  import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';

  // App Globals
  import AppStyles from '../styles.ios';
  import AppConfig from '../config.ios';

  // Screens / Pages
  import Index from '../screens/tabbar.ios';
  import ComingSoon from '../screens/soon.ios';
  import FormExample from '../modules/example/screens/forms.ios';
  import ListViewExample from '../screens/listview.ios';
  import ListViewExample2 from '../screens/listview2.ios';

/* ==============================
  Menu Component
  =============================== */
var Menu = React.createClass({
  /**
    * Go To Screen
    */
  _goToScreen: function(title, link) {
    this.props.navigate(title, link);
  },

  /**
    * RENDER
    */
  render: function() {
    // Programatically Generate the Links
    var linksJsx = [];

    // ['**TITLE**', '**MODULE_NAME**']
    var links = [
      ['Tab Bar', Index],
      ['Forms', FormExample],
      ['List Example', ListViewExample],
      ['List Example 2', ListViewExample2],
    ];

    // Build the actual Menu Items
    for (var i=0; i < links.length; i++) {
      linksJsx.push(
        <TouchableOpacity 
          style={[]} 
          key={i}
          onPress={this._goToScreen.bind(this, links[i][0], links[i][1])}>
          <View style={styles.menuItem}>
            <Text style={[AppStyles.baseText, styles.menuItemText]}>{links[i][0]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          {linksJsx}
        </View>
      </View>
    );
  },
});

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
    menuContainer: {
      flex: 1,
      left: 0,
      right: 0,
      backgroundColor: "#111111",
    },
    menu: {
      flex: 1,
      left: 0,
      right: 0,
      height: AppConfig.windowHeight,
      backgroundColor: "#111111",
      padding: 20,
      paddingTop: AppConfig.statusBarHeight,
    },
    menuItem: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#333",
      paddingBottom: 10,
    },
    menuItemText: {
      fontSize: 17,
      fontWeight: '500',
      paddingTop: 10,
      flex: 1,
      color: "#EEE"
    },
  });

/* ==============================
  Done!
  =============================== */
  module.exports = Menu;