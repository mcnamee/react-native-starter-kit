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
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  // Screens / Pages
  var Index = require('../screens/tabbar.ios');
  var ComingSoon = require('../screens/soon.ios');
  var FormExample = require('../modules/example/screens/forms.ios');
  var ListViewExample = require('../screens/listview.ios');
  var ListViewExample2 = require('../screens/listview2.ios');

  var {
    StyleSheet,
    View,
    Text,
    Component,
    TouchableOpacity
  } = React;

/* ==============================
  Menu Component
  =============================== */
var Menu = React.createClass({
  /**
    * Go To Screen
    */
  goToScreen: function(title, link) {
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
          onPress={this.goToScreen.bind(this, links[i][0], links[i][1])}>
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
      width: AppConfig.windowWidth,
      backgroundColor: "#111111",
    },
    menu: {
      flex: 1,
      width: AppConfig.windowWidth * 0.68,
      height: AppConfig.windowHeight,
      backgroundColor: "#111111",
      padding: 20,
      paddingTop: AppConfig.statusBarHeight,
    },
    menuItem: {
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