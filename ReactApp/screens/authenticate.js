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
import AppStyles from '../styles'
import AppConfig from '../config'

// Components
import Button from '../components/button'

// Screens
import Index from './tabs';
import Login from './auth.login'

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  /**
    * Navigates to Sign Up
    */
  _onPressLogin = () => {
    this.props.navigator.push({
      title: 'Login',
      component: Login, 
      index: 2,
    });
  }

	/**
	  * Skips Auth
	  */
	_onPressSkip = () => {
	  this.props.navigator.push({
	    title: AppConfig.appName,
	    component: Index,
	    index: 0,
	  });
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
	            onPress={()=>this._onPressLogin()} />
          </View>

          <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
            <Button
              text={'Sign up'}
              onPress={()=>this._onPressLogin()} />
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
	            onPress={this.props.close} />
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