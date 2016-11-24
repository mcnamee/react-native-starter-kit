/**
 * First Load Screen
 *  - Shows a nice loading screen whilst:
 *  - Checking if user is logged in, and redirects from there
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

// App Globals
import AppStyles from '../utils/styles';
import AppConfig from '../utils/config';

// Components
import Index from '../containers/recipes';
import Authenticate from './auth/authenticate';

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
export default FirstLoad;
