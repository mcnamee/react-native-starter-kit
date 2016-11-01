/**
 * Authenticate Screen
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

// App Globals
import AppStyles from '../../styles';
import AppConfig from '../../config';

// Components
import Button from '../../components/button';

// Screens
import Login from './login';
import Index from '../recipes/tabs';
import AuthWebView from './webview';

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  static propTypes = {
    navigator: PropTypes.object.isRequired,
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

  /**
    * RENDER
    */
  render = () => (
    <View style={[AppStyles.containerCentered, AppStyles.container]}>
      <Text style={[AppStyles.baseText, AppStyles.h1, AppStyles.centered]}>
        Login
      </Text>

      <View style={[AppStyles.spacer_10]} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
          <Button
            text={'Login'}
            onPress={this.onPressLogin}
          />
        </View>

        <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
          <Button
            text={'Sign up'}
            onPress={this.onPressSignUp}
          />
        </View>
      </View>

      <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
        - or -
      </Text>

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            text={'Skip'}
            size={'small'}
            type={'outlined'}
            onPress={this.onPressSkip}
          />
        </View>
      </View>
    </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
