/**
 * Receipe Tabs Screen
 *  - Shows tabs, which contain receipe listings
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import { connect } from 'react-redux';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

// Actions
import * as RecipeActions from '../../actions/recipe';

// App Globals
import AppStyles from '../../styles';
import AppConfig from '../../config';
import AppAPI from '../../api';

// Components
import Loading from '../../components/loading';
import Error from '../../components/error';

// Screens
import RecipeListing from './listing';

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
    backgroundColor: '#FFF',
  },
  tabbar_text: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Tabs extends Component {
  static componentName = 'Tabs';

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    meals: PropTypes.arrayOf(PropTypes.object),
    getMeals: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      visitedRoutes: [],
    };
  }

  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      this.fetchData();
    });
  }

  /**
    * When meals are ready, populate tabs
    */
  setTabs = () => {
    const routes = [];
    let idx = 0;
    this.props.meals.forEach((meal) => {
      routes.push({
        key: idx.toString(),
        id: meal.id.toString(),
        title: meal.name,
      });

      idx += 1;
    });

    this.setState({
      navigation: {
        index: 0,
        routes,
      },
    }, () => {
      this.setState({
        loading: false,
      });
    });
  }

  /**
    * Fetch meals to populate tabs
    */
  fetchData = () => {
    // Get meals to populate tabs
    if (!this.props.meals || this.props.meals.length < 1) {
      this.props.getMeals()
        .then(() => {
          this.setTabs();
        }).catch((err) => {
          const error = AppAPI.handleError(err);
          this.setState({
            loading: false,
            error,
          });
        });
    } else {
      this.setTabs();
    }
  }

  /**
    * On Change Tab
    */
  handleChangeTab = (index) => {
    this.setState({
      navigation: { ...this.state.navigation, index },
    });
  }

  /**
    * Header Component
    */
  renderHeader = props => (
    <TabBarTop
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbar_text]}>{scene.route.title}</Text>
      )}
    />
  )

  /**
    * Which component to show
    */
  renderScene = ({ route }) => {
    // For performance, only render if it's this route, or I've visited before
    // if (
    //   this.state.navigation.index !== route.key &&
    //   this.state.visitedRoutes.indexOf(route.key) < 0
    // ) {
    //   return null;
    // }

    // And Add this index to visited routes
    if (this.state.visitedRoutes.indexOf(route.key) < 0) {
      this.state.visitedRoutes.push(route.key);
    }

    // Which component should be loaded?
    return (
      <View style={AppStyles.windowSize}>
        <RecipeListing
          meal={route.id}
          navigator={this.props.navigator}
        />
      </View>
    );
  }

  render = () => {
    if (this.state.loading || !this.state.navigation) return <Loading />;
    if (this.state.error) return <Error text={this.state.error} />;

    return (
      <TabViewAnimated
        style={[styles.tabContainer]}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        navigationState={this.state.navigation}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

/* Export Component ==================================================================== */
// Define which part of the state we're passing to this component
const mapStateToProps = state => ({
  meals: state.recipe.meals,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  getMeals: RecipeActions.getMeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
