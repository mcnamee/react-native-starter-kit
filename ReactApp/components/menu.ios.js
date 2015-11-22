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
  var EventEmitter = require('EventEmitter');
  var Subscribable = require('Subscribable');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  // Screens / Pages
  var Index = require('../screens/tabbar.ios');
  var ComingSoon = require('../screens/soon.ios');
  var FormExample = require('../modules/example/screens/forms.ios');

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
  mixins: [Subscribable.Mixin],

  /**
    * Allow this component to see sidebar menu functions
    */
  contextTypes : {
    menuActions: React.PropTypes.object.isRequired
  },

  /**
    * On Load
    */
  componentDidMount: function() {
    this.addListenerOn(this.props.events, 'toggleMenu', this.onLeftButtonPress);
  },

  /**
    * When Navbar Left Button Tapped
    */
  onLeftButtonPress: function() {
    this.context.menuActions.toggle();
  },

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
      ['Shop', ComingSoon],
    ];

    // Build the actual Menu Items
    for (var i=0; i < links.length; i++) {
      linksJsx.push(
        <TouchableOpacity 
          style={[]} 
          onPress={this.goToScreen.bind(this, links[i][0], links[i][1])}>
          <View style={styles.menuItem}>
            <Text style={[AppStyles.baseText, styles.menuItemText]}>{links[i][0]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.menu}>
        {linksJsx}
      </View>
    );
  },
});

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
    menu: {
      flex: 1,
      width: AppConfig.windowWidth * 0.68,
      height: AppConfig.windowHeight,
      backgroundColor: '#3B3B3B',
      padding: 20,
      paddingTop: AppConfig.statusBarHeight,
    },
    menuItem: {
      borderBottomWidth: 1,
      borderBottomColor: "#555555",
      paddingBottom: 10,
    },
    menuItemText: {
      fontSize: 17,
      fontWeight: '800',
      paddingTop: 10,
      flex: 1,
      color: "#ccc"
    },
  });

/* ==============================
  Done!
  =============================== */
  module.exports = Menu;