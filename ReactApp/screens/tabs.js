/**
 * Tabs
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
  InteractionManager,
} from 'react-native'
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Components
import Loading from '../components/loading'

// Screens
import ComingSoon from './soon'
import ListView from './listview'

/* Component ==================================================================== */
class Tabs extends Component {
  static componentName = 'Tabs';

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      loading: true,
      visitedRoutes: [],
      navigation: {
        index: 0,
        routes: [
          { key: '1', title: 'Tab 1'},
          { key: '2', title: 'Tab 2'},
          { key: '3', title: 'Tab 3'},
          { key: '4', title: 'Tab 4'},
        ],
      },
    };
  }

  /**
    * Executes after all modules have been loaded
    */
  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ loading: false });
    });
  }

  /**
    * On Change Tab
    */
  _handleChangeTab = (index) => {
    this.setState({
      navigation: { ...this.state.navigation, index },
    });
  }

  /**
    * Header Component
    */
  _renderHeader = (props) => {
    return (
      <TabBarTop {...props} 
        style={styles.tabbar}
        tabStyle={styles.tabbarTab}
        indicatorStyle={styles.tabbarIndicator}
        renderLabel={(scene)=>{
          return (
            <Text style={[styles.tabbar_text]}>{scene.route.title}</Text>
          );
        }} />
    );
  }

  /**
    * Which component to show
    */
  _renderScene = ({ route }) => {
    // For performance, only render if it's this route, or I've visited before
    /*if((this.state.navigation.index + 1) != route.key && this.state.visitedRoutes.indexOf(route.key) < 0) {
      return null;
    }*/
    // And Add this index to visited routes
    if(this.state.visitedRoutes.indexOf(route.key) < 0) this.state.visitedRoutes.push(route.key);

    // Which component should be loaded?
    switch (route.key) {
      case '1':
        return (
        	<View style={AppStyles.windowSize}>
            <ComingSoon 
            	placeholder={'This is ' + route.title}
              navigator={this.props.navigator} />
          </View>
        );
      case '2':
        return (
        	<View style={AppStyles.windowSize}>
            <ListView
            	noImages={true}
              navigator={this.props.navigator} />
          </View>
        );
      case '3':
        return (
        	<View style={AppStyles.windowSize}>
            <ComingSoon
            	placeholder={'This is ' + route.title}
              navigator={this.props.navigator} />
          </View>
        );
      case '4':
        return (
        	<View style={AppStyles.windowSize}>
            <ListView
              navigator={this.props.navigator} />
          </View>
        );
      default:
        return null;
    }
  }

  /**
    * Do Render
    */
  render = () => {
    if (this.state.loading) return <Loading />

    return (
      <TabViewAnimated
        style={[styles.tabContainer]}
        navigationState={this.state.navigation}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
	// Tab Styles
  tabContainer: {
    flex: 1,
  },
	tabbar: {
		backgroundColor: AppConfig.primaryColor,
	},
	tabbarIndicator: {
		backgroundColor: AppConfig.secondaryColor,
	},
	tabbar_text: {
		color: "#FFF",
	},
});

/* Export Component ==================================================================== */
export default Tabs
