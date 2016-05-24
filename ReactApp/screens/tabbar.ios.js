/**
 * Tabbar
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise Component
  =============================== */
  // React
  import React, { Component } from 'react';
  import {
    StyleSheet,
    TabBarIOS,
  } from 'react-native';

  // App Globals
  // import AppStyles from '../styles.ios';
  import AppConfig from '../config.ios';

  // Screens / Pages
  import ComingSoon from './soon.ios';
  import FirstLoad from './first.load.ios';

/* ==============================
  View
  =============================== */
  class Tabbar extends Component {

    /**
      * Setup Default State Values
      */
    constructor(props) {
      super(props);

      this.state = {
        selectedTab: 'favourites'
      }
    }

    /**
      * On Mount
      */
    componentWillMount() {
      // Show Splash Screen (on first load)
      if(this.props.showSplashScreen) {
        this.props.navigator.push({
          title: 'Sign Up',
          component: FirstLoad,
          index: 2,
          navigator: this.props.navigator,
          transition: 'FloatFromBottom',
        });
      }
    }

    /**
      * RENDER
      */
    render() {
      return (
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
            // icon={{uri:'contacts'}}
            // icon={require('image!settings')}
            systemIcon='more'
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}>
            <ComingSoon navigator={this.props.navigator} placeholder={"This could be a settings screen..."} />
          </TabBarIOS.Item>

        </TabBarIOS>
      )
    }
  }

/* ==============================
  Styles
  =============================== */
  // var styles = StyleSheet.create({
  // });

/* ==============================
  Done!
  =============================== */
  module.exports = Tabbar;