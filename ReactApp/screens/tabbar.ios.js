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
  var React = require('react-native');

  // App Globals
  // var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  // Screens / Pages
  var ComingSoon = require('./soon.ios');

  var {
    StyleSheet,
    TabBarIOS,
    Component,
  } = React;

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