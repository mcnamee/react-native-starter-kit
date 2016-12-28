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
import { Actions } from 'react-native-router-flux';

// App Globals
import AppStyles from '@constants/styles';
import AppConfig from '@constants/config';

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
        return Actions.app({ type: 'reset' });
      }).catch(() => {
        // Not Logged in, show Login screen
        return Actions.authenticate({ type: 'reset' });
      });
  }

  render = () => (
    <View style={[AppStyles.container]}>
      <Image
        source={require('@images/launch.jpg')}
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
