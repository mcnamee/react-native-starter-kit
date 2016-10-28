/**
 * Authenticate Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

// App Globals
import AppStyles from '../../styles'
import AppConfig from '../../config'

// Components
import Button from '../../components/button'

// Screens
import Index from '../recipes/tabs';
import Login from './login'
import AuthWebView from './webview'

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  /**
    * Navigates to Login
    */
  _onPressLogin = () => {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
      index: 2,
    });
  }

  /**
    * Navigates to Sign Up
    */
  _onPressSignUp = () => {
    this.props.navigator.push({
      title: 'Sign Up',
      component: AuthWebView, 
      index: 2,
      passProps: {
        url: AppConfig.urls.signUp
      },
    });
  }

	/**
	  * Skips Auth
	  */
	_onPressSkip = () => {
	  this.props.navigator.replaceAtIndex({
	    title: AppConfig.appName,
	    component: Index,
	  }, 0);
	}

  /**
    * RENDER
    */
  render = () => {
    return (
      <View style={[AppStyles.containerCentered, AppStyles.container]}>
        <Text style={[AppStyles.baseText, AppStyles.h1, AppStyles.centered]}>
          Login
        </Text>

        <View style={[AppStyles.spacer_10]} />

        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
	          <Button
	            text={'Login'}
	            onPress={this._onPressLogin} />
          </View>

          <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
            <Button
              text={'Sign up'}
              onPress={this._onPressSignUp} />
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
	            onPress={this._onPressSkip} />
      		</View>
        </View>
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
});

/* Export Component ==================================================================== */
export default Authenticate