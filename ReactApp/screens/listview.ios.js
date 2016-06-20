/**
 * Listing SCREEN
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
  ListView,
  RefreshControl,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'
import AppUtil from '../util.ios'

// Components
import ListRow from '../components/list.row.ios'

// Screens
import Screen from './soon.ios'

// Demo data
const defaultData = [
  {
    title: 'Lorem ipsum adipiscing',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/nature',
  },
  {
    title: 'Guim petis',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/animals',
  },
  {
    title: 'Filos be amik',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/transport',
  },
  {
    title: 'Mi a adipiscing',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/nightlife',
  },
  {
    title: 'Ching vivamus le',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/food',
  },
  {
    title: 'Parturinent my proin',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/fashion',
  },
  {
    title: 'Vestibulum in fames',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/business',
  },
];


/* Component ==================================================================== */
class ListViewExample extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isRefreshing: false,
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

	/**
    * Executes after all modules have been loaded
    */
	componentDidMount = () => {
	  // Fetch Data
    this._fetchData();
	}

  /**
    * Fetch Data from "API" (for Demo Purposes)
    */
  _fetchData = () => {
    this.setState({ isRefreshing: true });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(defaultData),
      isRefreshing: false,
    });
  }

  /**
    * Each Row Item
    */
  _renderRow = (data) => {
    let { title, image } = data;

    return (
      <ListRow title={title.toString()}
        image={!this.props.noImages ? image : null}
        onPress={()=>{
          this.props.navigator.push({
            title: title,
            component: Screen,
            index: 2
          });
        }} />
    );
  }

  /**
    * RENDER
    */
  render = () => {
    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={8}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          contentContainerStyle={styles.container} 
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._fetchData}
              tintColor={AppConfig.primaryColor} />
          } />
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    paddingBottom: AppConfig.tabBarHeight,
  },
});

/* Export Component ==================================================================== */
module.exports = ListViewExample;
module.exports.details = {
  title: 'ListViewExample'
};