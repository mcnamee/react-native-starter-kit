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

  // 3rd Party Components
  var NavigationBar = require('react-native-navbar');
  var SideMenu = require('react-native-side-menu');

  // App Globals
  var AppStyles = require('./ReactApp/styles.ios');
  var AppConfig = require('./ReactApp/config.ios');

  // Components
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
    TouchableOpacity,
    Image,
  } = React;

/* ==============================
  Main Navigator with Sidemenu
  =============================== */

  /**
   * Custom Navbar Title component
   */
  var NavbarTitle = React.createClass({
    render: function() {
      return (
        <Text style={[AppStyles.baseText, AppStyles.strong, AppStyles.navbarTitle]}>{this.props.title}</Text>
      );
    }
  });

  /**
    * Custom Navbar Button component
    */
  var NavbarButton = React.createClass({
    /**
      * On Icon Press
      */
    onPress: function() { if(this.props.onPress) this.props.onPress(); },

    render: function() {
      return (
        <TouchableOpacity onPress={this.onPress} activeOpacity={0.6}>
          <Image
            source={this.props.image}
            style={AppStyles.navbarButton} />
        </TouchableOpacity>
      );
    }
  });

  /**
   *  Main View w/ Sidebar
   */
  var Application = React.createClass({
    
    /**
      * Initial State
      */
    getInitialState: function() {
      return {
        menuIsOpen: false,
      };
    },

    /**
      * On Load
      */
    /*componentWillMount: function() {
    },*/

    /**
      * Navigates to page from menu
      */
    navigate: function(title, link) {
      // Toggle Menu
      this.setState({
        menuIsOpen: !this.state.menuIsOpen,
      });

      // Navigate to Screen
      this.refs.rootNavigator.replace({
        title: title,
        component: link,
        navigator: this.refs.rootNavigator,
      });
    },

    /**
      * Generate Custom Navbar
      */
    renderScene: function(route, navigator) {
      var self = this;

      var Component = route.component;
      
      // Default Navbar Title
      var title = 'Starter App';
      if(route.title) title = route.title;

      // Determine which Icon component - hamburger or back?
      var leftButton = (
        <NavbarButton 
          image={require('./ReactApp/images/icons/hamburger.png')} 
          onPress={()=>self.setState({menuIsOpen:true})} />
      );

      if (route.index > 0) {
        leftButton = (
          <NavbarButton 
            image={require('./ReactApp/images/icons/back_button.png')} 
            onPress={self.refs.rootNavigator.pop} />
        );
      }

      // Done
      return (
        <View style={[AppStyles.appContainer, AppStyles.container]}>
          <NavigationBar
            title={<NavbarTitle title={title} />}
            statusBar={{style: 'light-content', hidden: false}}
            style={AppStyles.navbar}
            tintColor={AppConfig.primaryColor}
            leftButton={leftButton} />

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
          menu={<Menu navigate={this.navigate} />}
          isOpen={this.state.menuIsOpen}>

          <Navigator
            ref="rootNavigator"
            style={[AppStyles.container, AppStyles.appContainer]}
            renderScene={this.renderScene}
            initialRoute={{
              component: Index,
              index: 0,
              navigator: this.refs.rootNavigator,
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