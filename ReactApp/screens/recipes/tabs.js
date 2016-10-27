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
import { connect } from 'react-redux'
import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';

// Actions
import * as RecipeActions from '../../actions/recipe'

// App Globals
import AppStyles from '../../styles'
import AppConfig from '../../config'
import AppAPI from '../../api'

// Components
import Loading from '../../components/loading'
import Error from '../../components/error'

// Screens
import ComingSoon from '../soon'
import ListView from './listing'

/* Component ==================================================================== */
class Tabs extends Component {
  static componentName = 'Tabs';

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      loading: true,
      visitedRoutes: [],
      //navigation: {
      //  index: 0,
      //  routes: [
      //    // Component needs some defaults...
      //    { key: '-1', title: 'Loading...'},
      //    { key: '-2', title: 'Loading 2...'},
      //  ],
      //},
    };
  }

  /**
    * Executes after all modules have been loaded
    */
  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      this._fetchData();
    });
  }

  /**
    * Fetch meals to populate tabs
    */
  _fetchData = () => {
    // Get meals to populate tabs
    if (!this.props.meals || this.props.meals.length < 1) {
      this.props.getMeals()
        .then(() => {
          this._setTabs();
        }).catch(err => {
          let error = AppAPI.handleError(err);
          this.setState({ 
            loading: false,
            error: error
          });
        });
    } else {
      this._setTabs();
    }
  }

  /**
    * When meals are ready, populate tabs
    */
  _setTabs = () => {
    let routes = [];
    let idx = 0;
    this.props.meals.forEach(meal => {
      routes.push({
        key: idx.toString(),
        id: meal.id.toString(),
        title: meal.name,
      });

      idx++;
    });

    this.setState({
      navigation: {
        index: 0,
        routes: routes,
      }
    }, () => {
      this.setState({
        loading: false,
      });
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
    if((this.state.navigation.index) != route.key && this.state.visitedRoutes.indexOf(route.key) < 0) {
      return null;
    }

    // And Add this index to visited routes
    if(this.state.visitedRoutes.indexOf(route.key) < 0) this.state.visitedRoutes.push(route.key);

    // Which component should be loaded?
    switch (route.key) {
      default:
        return (
          <View style={AppStyles.windowSize}>
            <ListView
              meal={route.id}
              navigator={this.props.navigator} />
          </View>
        );
    }
  }

  /**
    * Page Component
    */
  _renderPage = (props) => {
    return (
    	<TabViewPage {...props} renderScene={this._renderScene} />
    )
  }

  /**
    * Do Render
    */
  render = () => {
    if (this.state.loading || !this.state.navigation) return <Loading />
    if (this.state.error) return <Error text={this.state.error} />

    return (
      <TabViewAnimated
        style={[styles.tabContainer]}
        navigationState={this.state.navigation}
        renderScene={this._renderPage}
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
	tabbarTab: {
		backgroundColor: AppConfig.primaryColor,
	},
	tabbarIndicator: {
		backgroundColor: "#FFF",
	},
	tabbar_text: {
		color: "#FFF",
	},
});

/* Export Component ==================================================================== */
// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  meals: state.recipe.meals,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  getMeals: RecipeActions.getMeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);