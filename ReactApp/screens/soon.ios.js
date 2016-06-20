/**
 * Coming Soon
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
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'

// Components
import Button from '../components/button.ios'

/* Component ==================================================================== */
class ComingSoon extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */
  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle, 
      component: ComingSoon, 
      index: 2
    });
  }

  /**
    * RENDER
    */
  render = () => {
    let text = this.props.placeholder || 'Coming soon...'

    // Done
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {text}
        </Text>

        <View style={[AppStyles.spacer_10]} />

        <Button type={'outlined'}
          text={'Tap to test the back button'}
          onPress={()=>this._navigate(text)} />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
module.exports = ComingSoon;
module.exports.details = {
  title: 'ComingSoon'
};