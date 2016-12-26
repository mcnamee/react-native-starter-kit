/**
 * App - set all the things up
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Navigator,
  StatusBar,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import { Router, Actions } from 'react-native-router-flux';

// App Globals
import AppUtil from '@lib/util';
import AppConfig from '@config/';
import AppRoutes from '@config/routes';
import AppStyles from '@config/styles';

// Containers
import Menu from '@containers/menu';
import Index from '@containers/splash';

// Components
import NavbarElements from '@components/ui/navbar.elements';

// Google Analytics
const GoogleAnalytics = new GoogleAnalyticsTracker(AppConfig.gaTrackingId);

/* Component ==================================================================== */
class AppContainer extends Component {
  static propTypes = {
    sideMenuIsOpen: PropTypes.bool.isRequired,
    closeSideMenu: PropTypes.func.isRequired,
    toggleSideMenu: PropTypes.func.isRequired,
  }

  /**
    * An option was pressed in the Side Menu. Go to scene...
    */
  onSideMenuPress = (title, component, extraProps) => {
    // Close menu
    this.props.closeSideMenu();

    let passProps = extraProps;
    if (AppUtil.objIsEmpty(extraProps)) {
      passProps = {};
    }

    // Change Scene
    Actions.styleguide();
    /*this.rootNavigator.replace({
      title,
      component,
      index: 0,
      ...passProps,
    });*/
  }

  /**
    * Toggle Side Menu
    */
  onSideMenuChange = (isOpen) => {
    if (isOpen !== this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  /**
    * Render each scene with a Navbar and Sidebar
    */
  renderScene = (route, navigator) => {
    // Default Navbar Title
    const navbarTitle = route.title || AppConfig.appName;
    let leftButtonIcon = 'ios-menu';
    let leftButtonAction = this.props.toggleSideMenu;

    // Google Analytics
    let trackingScreenName = navbarTitle;
    if (route.component.componentName) {
      trackingScreenName = `${route.component.componentName} - ${trackingScreenName}`;
    }
    GoogleAnalytics.trackScreenView(trackingScreenName);

    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    if (route.index > 0) {
      leftButtonIcon = 'ios-arrow-back-outline';
      leftButtonAction = this.rootNavigator.pop;
    }

    const leftButton = {
      onPress: leftButtonAction,
      icon: leftButtonIcon,
    };

    // Show a cross icon when transition pops from bottom
    if (route.transition === 'FloatFromBottom') {
      leftButton.icon = 'md-close';
    }

    // If Navbar hidden, don't show status bar
    if (route.hideNavbar) {
      StatusBar.setHidden(true);
    }

    return (
      <View style={[AppStyles.appContainer, AppStyles.container]}>
        {!route.hideNavbar &&
          <NavigationBar
            title={<NavbarElements.Title title={navbarTitle || null} />}
            statusBar={{ style: 'light-content', hidden: false }}
            style={[AppStyles.navbar]}
            tintColor={AppConfig.theme.primaryColor}
            leftButton={
              <NavbarElements.LeftButton
                onPress={leftButton.onPress}
                icon={leftButton.icon}
              />
            }
          />
        }
        <route.component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  render() {
    return (
      <SideMenu
        ref={(a) => { this.rootSidebarMenu = a; }}
        openMenuOffset={AppConfig.windowWidth * 0.75}
        menu={
          <Menu
            navigate={this.onSideMenuPress}
            ref={(b) => { this.rootSidebarMenuMenu = b; }}
          />
        }
        isOpen={this.props.sideMenuIsOpen}
        onChange={this.onSideMenuChange}
      >
        <Router scenes={AppRoutes} />
        {/*<Navigator
          ref={(c) => { this.rootNavigator = c; }}
          style={[AppStyles.container, AppStyles.appContainer]}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if (route.transition === 'FloatFromBottom') {
              return Navigator.SceneConfigs.FloatFromBottom;
            }
            return Navigator.SceneConfigs.PushFromRight;
          }}
          initialRoute={{
            component: Index,
            index: 0,
            navigator: this.rootNavigator,
            hideNavbar: true,
          }}
        />*/}

      </SideMenu>
    );
  }
}

/* Export Component ==================================================================== */
export default AppContainer;
