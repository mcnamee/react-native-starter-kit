/**
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise App
  =============================== */
  // React
  var React = require('react-native');
  var EventEmitter = require('EventEmitter');
  var Subscribable = require('Subscribable');

  // 3rd Party Components
  var NavigationBar = require('react-native-navbar');
  var SideMenu = require('react-native-side-menu');

  // App Globals
  var AppStyles = require('./ReactApp/styles.ios');

  // Components
  var Icons = require('./ReactApp/components/icons.ios');
  var Menu = require('./ReactApp/components/menu.ios');

  // Screens / Pages
  var Index = require('./ReactApp/screens/tabbar.ios');

  var {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    Text,
    View,
  } = React;

/* ==============================
  Main Navigator with Sidemenu
  =============================== */

  /**
   * Custom `Title` component
   */
  class CustomTitle extends React.Component {
    render() {
      return (
        <Text style={[AppStyles.baseText, AppStyles.strong, AppStyles.navbar_title]}>{this.props.title}</Text>
      );
    }
  }

  /**
   *  Main View w/ Sidebar
   */
  var Application = React.createClass({
    mixins: [Subscribable.Mixin],

    /**
      * Before Load
      */
    getInitialState: function() {
      return {
        touchToClose: true,
        disableGestures: false,
      };
    },

    /**
      * On Load
      */
    componentWillMount: function() {
      this.eventEmitter = new EventEmitter();
    },

    /**
      * When Back Button from NavBar is Clicked
      */
    onLeftBackButtonPress: function(navigator) {
      this.refs.rootNavigator.pop();
    },

    /**
      * When Hamburger from NavBar is Clicked
      */
    onLeftButtonPress: function() {
      this.eventEmitter.emit('toggleMenu');
    },

    /**
      * Navigates to page from menu
      */
    navigate: function(title, link) {
      this.refs.rootSidebarMenu.closeMenu();

      this.refs.rootNavigator.replace({
        title: title,
        component: link,
      });
    },

    /**
      * Generate Custom Navbar
      */
    renderScene: function(route, navigator) {
      var Component = route.component;
      var navBar = route.navigationBar;

      // Icons
      var MenuIcon = Icons.MenuIcon;
      var BackIcon = Icons.BackIcon;

      // Navbar Setup
      if (navBar) {
        navBar = React.addons.cloneWithProps(navBar, {
          navigator: navigator,
          route: route
        });
      }
      
      // Default Navbar Title
      var title = 'Starter App';
      if(route.title != undefined) {
        title = route.title;
      }

      // Determine which Icon component - hamburger or back?
      var customPrev = <MenuIcon leftButtonPress={this.onLeftButtonPress} />;
      if (route.index > 0){
        var customPrev = <BackIcon leftButtonPress={this.onLeftBackButtonPress} />;
      }

      // Done
      return (
        <View style={AppStyles.container}>
          <NavigationBar
            title={title}
            style={AppStyles.navbar}
            customPrev={customPrev}
            customTitle={<CustomTitle title={title} />} />

          <Component navigator={navigator} route={route} />
        </View>
      );
    },

    /**
      * RENDER
      */
    render: function() {
      return (
        <SideMenu
          ref="rootSidebarMenu"
          menu={<Menu events={this.eventEmitter} navigate={this.navigate} />}
          touchToClose={this.state.touchToClose}
          disableGestures={this.state.disableGestures}>

          <Navigator
            ref="rootNavigator"
            style={[AppStyles.container, AppStyles.appContainer]}
            renderScene={this.renderScene}
            initialRoute={{
              component: Index,
              index: 0,
            }} />

        </SideMenu>
      );
    }
  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
  });

/* ==============================
  Done!
  =============================== */
  AppRegistry.registerComponent('StarterKit', () => Application);