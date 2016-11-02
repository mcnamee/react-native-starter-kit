/**
 * First Load
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

// Actions
import * as UserActions from '../actions/user';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

// Screens
import Index from '../screens/recipes/tabs';
import Authenticate from '../screens/auth/authenticate';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppConfig.windowWidth,
    height: AppConfig.windowHeight,
  },
});

/* Component ==================================================================== */
class FirstLoad extends Component {
  static componentName = 'FirstLoad';

  static propTypes = {
    navigator: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
    login: PropTypes.func.isRequired,
  }

  /**
    * On first load
    */
  componentDidMount = () => {
    // Try to authenticate based on existing token
    this.props.login()
      .then(() => {
        // Logged in, show index screen
        this.props.navigator.replace({
          title: AppConfig.appName,
          component: Index,
          index: 0,
        });
      }).catch(() => {
        // Not Logged in, show Login screen
        this.props.navigator.replace({
          title: 'Login',
          component: Authenticate,
          index: 0,
          hideNavbar: true,
        });
      });
  }

  render = () => (
    <View style={[AppStyles.container]}>
      <Image
        source={require('../images/launch.jpg')}
        style={[styles.launchImage, AppStyles.containerCentered]}
      >
        <ActivityIndicator
          animating
          size={'large'}
          color={'#C1C5C8'}
        />
      </Image>
    </View>
  );
}

/* Export Component ==================================================================== */
// Define which part of the state we're passing to this component
const mapStateToProps = state => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  login: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstLoad);
