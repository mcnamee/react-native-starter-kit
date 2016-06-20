/**
 * Tabbar
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TabBarIOS,
  Modal,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'

// Screens
import ComingSoon from './soon.ios'
import FirstLoad from './first.load.ios'

/* Component ==================================================================== */
class Tabbar extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      selectedTab: 'favourites',
      splashScreenVisible: this.props.showSplashScreen || false,
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    showSplashScreen: React.PropTypes.bool,
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
    return (
      <View style={[AppStyles.container]}>
        <TabBarIOS 
          selectedTab={this.state.selectedTab}
          tintColor={AppConfig.primaryColor}
          translucent={true}>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'favourites'}
            title="Favourites"
            // icon={{uri:'featured'}}
            systemIcon='favorites'
            onPress={() => {
              this.setState({
                selectedTab: 'favourites',
              });
            }}>
            <ComingSoon navigator={this.props.navigator} placeholder={"This could be whatever you'd like..."} />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            selected={this.state.selectedTab === 'contacts'}
            title="Contacts"
            systemIcon='contacts'
            onPress={() => {
              this.setState({
                selectedTab: 'contacts',
              });
            }}>
            <ComingSoon navigator={this.props.navigator} placeholder={"This could be a screen listing contacts..."} />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            selected={this.state.selectedTab === 'more'}
            title="More"
            systemIcon='more'
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}>
            <ComingSoon navigator={this.props.navigator} placeholder={"This could be a settings screen..."} />
          </TabBarIOS.Item>
        </TabBarIOS>

        <Modal animationType={'fade'} transparent={false} visible={this.state.splashScreenVisible}>
          <FirstLoad navigator={this.props.navigator}
            close={this.onSplashSkip} />
        </Modal>
      </View>
    )
  }
}

/* Export Component ==================================================================== */
module.exports = Tabbar;
module.exports.details = {
  title: 'Tabbar'
};