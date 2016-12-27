/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// App Globals
import AppConfig from '@constants/config';
import AppStyles from '@constants/styles';

// Components
import Button from '@components/ui/button';

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

  /**
    * Navigates to Login
    */
  onPressLogin = () => {
    Actions.login();
  }

  /**
    * Navigates to Sign Up
    */
  onPressSignUp = () => {
    Actions.signUp();
  }

  /**
    * Skips Auth
    */
  onPressSkip = () => {
    Actions.home();
  }

  render = () => (
    <Image
      source={require('@images/login.jpg')}
      style={[AppStyles.containerCentered, AppStyles.container, styles.background]}
    >
      <Image
        source={require('@images/logo.png')}
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
