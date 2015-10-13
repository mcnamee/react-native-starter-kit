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
  /* Generic Plugins */
  var React = require('react-native');
  var S = require('../styles.ios');
  var C = require('../config.ios');

  /* React Plugins */
  var EventEmitter = require('EventEmitter');
  var Subscribable = require('Subscribable');

  /* Screens / Pages - All the links in the menu */
  var Index = require('../screens/tabbar.ios');
  var ComingSoon = require('../screens/soon.ios');

  var {
    StyleSheet,
    View,
    Text,
    Component,
    TouchableHighlight
  } = React;

/* ==============================
  Menu Component
  =============================== */
var Menu = React.createClass({
  mixins: [Subscribable.Mixin],

  /* Allow this component to see sidebar menu functions */
  contextTypes : {
    menuActions: React.PropTypes.object.isRequired
  },

  /* On Load */
  componentDidMount: function() {
    this.addListenerOn(this.props.events, 'toggleMenu', this.onLeftButtonPress);
  },

  /* When Navbar Left Button Tapped */
  onLeftButtonPress: function() {
    this.context.menuActions.toggle();
  },

  /* Go To Screen */
  goToScreen: function(title, link) {
    this.props.navigate(title, link);
  },

  render: function() {
    /* Programatically Generate the Links */
    var linksJsx = [];

    /* ['**TITLE**', '**MODULE_NAME**'] */
    var links = [
      ['Tab Bar', Index],
      ['New Arrivals', ComingSoon],
      ['Shop', ComingSoon],
    ];

    /* Build the actual Menu Items */
    for (var i=0; i < links.length; i++) {
      linksJsx.push(
        <TouchableHighlight underlayColor="#3B3B3B" style={styles.menuItemWrapper} onPress={this.goToScreen.bind(this, links[i][0], links[i][1])}>
          <View style={styles.menuItem}>
            <Text style={[S.baseText, styles.menuItemText]}>{links[i][0]}</Text>
          </View>
        </TouchableHighlight>
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
      width: C.windowWidth - 60,
      height: C.windowHeight,
      backgroundColor: '#3B3B3B',
      padding: 20,
      paddingTop: 20,
    },
    menuItemWrapper: {
      paddingRight: 20,
    },
    menuItem: {
      borderBottomWidth: 1,
      borderBottomColor: "#555555",
      paddingBottom: 10,
    },
    menuItemText: {
      fontSize: 17,
      fontWeight: '800',
      paddingTop: 15,
      flex: 1,
      color: "#ccc"
    },
  });

/* ==============================
  Done!
  =============================== */
  module.exports = Menu;