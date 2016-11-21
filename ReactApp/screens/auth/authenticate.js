/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';

// App Globals
import AppStyles from '../../styles';
import AppConfig from '../../config';

// Screens
import Login from './login';
import Index from '../recipes/tabs';
import AuthWebView from './webview';

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replaceAtIndex: PropTypes.func.isRequired,
    }).isRequired,
  }

  /**
    * Navigates to Login
    */
  onPressLogin = () => {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
      index: 2,
    });
  }

  /**
    * Navigates to Sign Up
    */
  onPressSignUp = () => {
    this.props.navigator.push({
      title: 'Sign Up',
      component: AuthWebView,
      index: 2,
      passProps: {
        url: AppConfig.urls.signUp,
      },
    });
  }

  /**
    * Skips Auth
    */
  onPressSkip = () => {
    this.props.navigator.replaceAtIndex({
      title: AppConfig.appName,
      component: Index,
    }, 0);
  }

  render = () => (
    <View style={[AppStyles.containerCentered, AppStyles.container]}>
      <Text style={[AppStyles.baseText, AppStyles.h1, AppStyles.centered]}>
        Login
      </Text>

      <View style={[AppStyles.spacer_10]} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
          <Button
            title={'Login'}
            onPress={this.onPressLogin}
            {...AppConfig.buttonDefaults}
          />
        </View>

        <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
          <Button
            title={'Sign up'}
            onPress={this.onPressSignUp}
            {...AppConfig.buttonDefaults}
          />
        </View>
      </View>

      <View style={AppStyles.spacer_15} />

      <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
        - or -
      </Text>

      <View style={AppStyles.spacer_10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Skip'}
            {...AppConfig.smlButtonDefaults}
            onPress={this.onPressSkip}
          />
        </View>
      </View>
    </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
