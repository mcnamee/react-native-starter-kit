/**
 * Receipe Tabs Screen
 *  - Shows tabs, which contain receipe listings
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

// Consts and Libs
import { AppColors } from '@theme/';

// Containers
import RecipeListing from '@containers/recipes/Listing/ListingContainer';

// Components
import { Text } from '@ui/';
import Loading from '@components/general/Loading';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: AppColors.brand.primary,
  },
  tabbarIndicator: {
    backgroundColor: '#FFF',
  },
  tabbarText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
let loadingTimeout;
class RecipeTabs extends Component {
  static componentName = 'RecipeTabs';

  static propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    meals: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      visitedRoutes: [],
    };
  }

  /**
    * Wait until any interactions are finished, before setting up tabs
    */
  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setTabs();
    });
  }

  componentWillUnmount = () => clearTimeout(loadingTimeout);

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
        title: meal.title,
      });

      idx += 1;
    });

    this.setState({
      navigation: {
        index: 0,
        routes,
      },
    }, () => {
      // Hack to prevent error showing
      loadingTimeout = setTimeout(() => {
        this.setState({ loading: false });
      }, 100);
    });
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
    <TabBar
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbarText]}>{scene.route.title}</Text>
      )}
    />
  )

  /**
    * Which component to show
    */
  renderScene = ({ route }) => {
    // For performance, only render if it's this route, or I've visited before
    if (
      parseInt(route.key, 0) !== parseInt(this.state.navigation.index, 0) &&
      this.state.visitedRoutes.indexOf(route.key) < 0
    ) {
      return null;
    }

    // And Add this index to visited routes
    if (this.state.visitedRoutes.indexOf(this.state.navigation.index) < 0) {
      this.state.visitedRoutes.push(route.key);
    }

    // Which component should be loaded?
    return (
      <View style={styles.tabContainer}>
        <RecipeListing
          meal={route.id}
        />
      </View>
    );
  }

  render = () => {
    if (this.state.loading || !this.state.navigation) return <Loading />;

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
export default RecipeTabs;
