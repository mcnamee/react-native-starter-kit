/**
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';

// App Globals
import AppStyles from './ReactApp/styles.ios';
import AppConfig from './ReactApp/config.ios';

// Components
import Menu from './ReactApp/components/menu.ios';
import NavbarElements from './ReactApp/components/navbar.elements.ios';

// Screens
import Index from './ReactApp/screens/tabbar.ios';


/* Component ==================================================================== */
class Application extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      menuIsOpen: false,
    };
  }

  /**
    * Used by Sidebar Menu to navigate to a Screen
    */
  navigate = (title, component, props) => {
    // Toggle Menu
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });

    if (!component) return false;

    // Navigate to Screen
    this.refs.rootNavigator.replace({
      title: title || null,
      component: component,
      navigator: this.refs.rootNavigator,
      passProps: props || {}
    });
  }

  /**
    * Render Component with a Navbar
    */
  _renderScene = (route, navigator) => {
    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    let leftButton = {
      onPress: (route.index > 0)
        ? this.refs.rootNavigator.pop 
        : ()=>this.setState({menuIsOpen: true}),
      image: (route.index > 0)
        ? require('./ReactApp/images/icons/back_button.png')
        : require('./ReactApp/images/icons/hamburger.png')
    };

    return (
      <View style={[AppStyles.appContainer, AppStyles.container]}>
        <NavigationBar
          title={<NavbarElements.Title title={route.title || null} />}
          statusBar={{style: 'light-content', hidden: false}}
          style={AppStyles.navbar}
          tintColor={AppConfig.primaryColor}
          leftButton={<NavbarElements.LeftButton onPress={leftButton.onPress} image={leftButton.image} />} />

        <route.component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  /**
    * RENDER
    */
  render = () => {
    return (
      <SideMenu isOpen={this.state.menuIsOpen}
        menu={<Menu navigate={this.navigate} />}>

        <Navigator ref="rootNavigator"
          style={[AppStyles.container, AppStyles.appContainer]}
          renderScene={this._renderScene}
          configureScene={function(route, routeStack) {
            if(route.transition == 'FloatFromBottom') 
              return Navigator.SceneConfigs.FloatFromBottom;
            else
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          initialRoute={{
            component: Index,
            index: 0,
            navigator: this.refs.rootNavigator,
            passProps: {
              showSplashScreen: true,
            }
          }} />

      </SideMenu>
    );
  }
}


/* Register App ==================================================================== */
AppRegistry.registerComponent('StarterKit', () => Application);