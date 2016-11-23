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
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import { SideMenu } from 'react-native-elements';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

// Actions
import * as SideMenuActions from '../actions/sidemenu';

// App Globals
import AppStyles from '../utils/styles';
import AppConfig from '../utils/config';
import AppUtil from '../utils/util';

// Components
import Menu from '../components/menu';
import NavbarElements from '../components/navbar.elements';

// Screens
import Index from '../containers/FirstLoad';

// Google Analytics
const GoogleAnalytics = new GoogleAnalyticsTracker(AppConfig.gaTrackingId);

/* Component ==================================================================== */
class AppContainer extends Component {
  static propTypes = {
    sideMenuIsOpen: PropTypes.bool.isRequired,
    closeSideMenu: PropTypes.func.isRequired,
    toggleSideMenu: PropTypes.func.isRequired,
    sideMenuGesturesDisabled: PropTypes.bool,
  }

  /**
    * An option was pressed in the Side Menu. Go to scene...
    */
  onSideMenuPress = (title, component, extraProps) => {
    // Close menu
    this.props.closeSideMenu();

    let passProps = extraProps;
    if (AppUtil.objIsEmpty(extraProps)) passProps = {};

    // Change Scene
    this.rootNavigator.replace({
      title,
      component,
      index: 0,
      ...passProps,
    });
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
    const title = route.title || AppConfig.appName;

    // Google Analytics
    const screenName = route.component.componentName
      ? `${route.component.componentName} - ${title}`
      : title;
    GoogleAnalytics.trackScreenView(screenName);

    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    const leftButton = {
      onPress: (route.index > 0)
        ? this.rootNavigator.pop
        : this.props.toggleSideMenu,
      icon: (route.index > 0)
        ? 'ios-arrow-back-outline'
        : 'ios-menu',
    };

    // Show a cross icon when transition pops from bottom
    if (route.transition === 'FloatFromBottom') {
      leftButton.icon = 'md-close';
    }

    // If Navbar hidden, don't show status bar
    if (route.hideNavbar) StatusBar.setHidden(true);

    return (
      <View style={[AppStyles.appContainer, AppStyles.container]}>
        {!route.hideNavbar &&
          <NavigationBar
            title={<NavbarElements.Title title={title || null} />}
            statusBar={{ style: 'light-content', hidden: false }}
            style={[AppStyles.navbar]}
            tintColor={AppConfig.primaryColor}
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
        MenuComponent={
          <Menu
            navigate={this.onSideMenuPress}
            ref={(b) => { this.rootSidebarMenuMenu = b; }}
          />
        }
        toggled={this.props.sideMenuIsOpen}
        onChange={this.onSideMenuChange}
      >

        <Navigator
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
        />

      </SideMenu>
    );
  }
}

// Define which part of the state we're passing to this component
const mapStateToProps = state => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
