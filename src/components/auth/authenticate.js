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
  Image,
  StyleSheet,
} from 'react-native';

// App Globals
import AppStyles from '../../config/styles';
import AppConfig from '../../config/';

// Components
import Button from '../ui/button';
import AuthWebView from './webview';
import Login from '../../containers/login';
import Index from '../home';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    height: AppConfig.windowHeight,
    width: AppConfig.windowWidth,
  },
  logo: {
    width: AppConfig.windowWidth * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
      resetTo: PropTypes.func.isRequired,
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
    this.props.navigator.resetTo({
      title: AppConfig.appName,
      component: Index,
    });
  }

  render = () => (
    <Image
      source={require('../../images/login.jpg')}
      style={[AppStyles.containerCentered, AppStyles.container, styles.background]}
    >
      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Login'}
            icon={{ name: 'lock' }}
            onPress={this.onPressLogin}
          />
        </View>
      </View>

      <View style={AppStyles.spacer_10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Sign up'}
            icon={{ name: 'face' }}
            onPress={this.onPressSignUp}
          />
        </View>
      </View>

      <View style={AppStyles.spacer_15} />

      <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered, styles.whiteText]}>
        - or -
      </Text>

      <View style={AppStyles.spacer_10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>
          <Button
            small
            title={'Skip'}
            onPress={this.onPressSkip}
            backgroundColor={'#CB009E'}
            raised={false}
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <View style={AppStyles.spacer_40} />
    </Image>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
