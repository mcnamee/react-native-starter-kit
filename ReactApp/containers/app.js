/**
 * App - set all the things up
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import SideMenu from 'react-native-side-menu'

// Actions
import * as SideMenuActions from '../actions/sidemenu'
import * as UserActions from '../actions/user'

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';
import AppUtil from '../util';

// Google Analytics
import GoogleAnalytics from 'react-native-google-analytics-bridge';
GoogleAnalytics.setTrackerId(AppConfig.gaTrackingId);

// Components
import Menu from '../components/menu';
import NavbarElements from '../components/navbar.elements';
import Loading from '../components/loading';

// Screens
import Index from '../screens/tabs';
import Authenticate from '../screens/authenticate';

/* Component ==================================================================== */
class AppContainer extends Component {
  /**
    * On first load
    */
  componentDidMount = () => {
    // Status Bar
    StatusBar.setHidden(false, 'slide'); // Slide in on load
    StatusBar.setBackgroundColor(AppConfig.primaryColor, true); // Android Status Bar Color

    // Try to authenticate based on existing token
    this.props.login()
      .then(() => {
        // Logged in, show index screen
        this.refs.rootNavigator.replace({
          title: AppConfig.appName,
          component: Index,
          index: 0,
        });
      }).catch(error => {
        // Not Logged in, show Login screen
        this.refs.rootNavigator.replace({
          title: 'Login',
          component: Authenticate,
          index: 0,
          passProps: {
            notPopupScreen: true,
          }
        });
      });
  }

  /**
    * An option was pressed in the Side Menu. Go to scene...
    */
  _onSideMenuPress = (title, component, extraProps) => {
    // Close menu
    this.props.closeSideMenu();

    if(AppUtil.objIsEmpty(extraProps)) extraProps = {};

    // Change Scene
    this.refs.rootNavigator.replace({
      title: title,
      component: component,
      index: 0,
      ...extraProps
    });
  }

  /**
    * Toggle Side Menu
    */
  _onSideMenuChange = (isOpen) => {
    if (isOpen != this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  /**
    * Render each scene with a Navbar and Sidebar
    */
  _renderScene = (route, navigator) => {
    // Default Navbar Title
    let title = route.title || AppConfig.appName;

    // Google Analytics
    let screenName = route.component.componentName ? route.component.componentName + ' - ' + title : title;
    GoogleAnalytics.trackScreenView(screenName);

    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    let leftButton = {
      onPress: (route.index > 0)
        ? this.refs.rootNavigator.pop 
        : this.props.toggleSideMenu,
      icon: (route.index > 0)
        ? 'ios-arrow-back-outline'
        : 'ios-menu-outline'
    };

    // Show a cross icon when transition pops from bottom
    if(route.transition == 'FloatFromBottom')  {
      leftButton.icon = 'ios-close-outline';
    }

    return (
      <View style={[AppStyles.appContainer, AppStyles.container]}>
        <NavigationBar
          title={<NavbarElements.Title title={title || null} />}
          statusBar={{style: 'light-content', hidden: false}}
          style={[AppStyles.navbar]}
          tintColor={AppConfig.primaryColor}
          leftButton={<NavbarElements.LeftButton onPress={leftButton.onPress} icon={leftButton.icon} />} />

        <route.component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  /**
    * RENDER
    */
  render() {
    return (
      <SideMenu
        ref="rootSidebarMenu"
        menu={<Menu navigate={this._onSideMenuPress} ref="rootSidebarMenuMenu" />}
        disableGestures={this.props.sideMenuGesturesDisabled}
        isOpen={this.props.sideMenuIsOpen}
        onChange={this._onSideMenuChange}>

        <Navigator 
          ref="rootNavigator"
          style={[AppStyles.container, AppStyles.appContainer]}
          renderScene={this._renderScene}
          configureScene={function(route, routeStack) {
            if(route.transition == 'FloatFromBottom') 
              return Navigator.SceneConfigs.FloatFromBottom;
            else
              return Navigator.SceneConfigs.PushFromRight;
          }}
          initialRoute={{
            component: Loading,
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

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
  login: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
