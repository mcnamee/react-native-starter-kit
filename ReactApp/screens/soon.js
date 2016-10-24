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
  Modal,
} from 'react-native'

// App Globals
import AppStyles from '../styles'

// Components
import Button from '../components/button'

// Screens
import FirstLoad from './first.load'

/* Component ==================================================================== */
class ComingSoon extends Component {
  static componentName = 'ComingSoon';

  constructor(props) {
    super(props);

    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    showSplashScreen: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
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
    * Splash Screen - Skip
    */
  onSplashSkip = () => {
    this.setState({ splashScreenVisible: false })
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

        <Modal animationType={'fade'}
          transparent={false}
          visible={this.state.splashScreenVisible}
          onRequestClose={()=>{}}>
          <FirstLoad navigator={this.props.navigator}
            close={this.onSplashSkip} />
        </Modal>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ComingSoon
