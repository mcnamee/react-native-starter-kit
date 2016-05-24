/**
 * Listing SCREEN
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise App
  =============================== */
  // React
  import React, { Component } from 'react';
  import {
    StyleSheet,
    View,
    ListView,
    RefreshControl,
  } from 'react-native';

  // App Globals
  import AppStyles from '../styles.ios';
  import AppConfig from '../config.ios';
  import AppUtil from '../util.ios';

  // App Components
  import ListRow from '../components/list.row.ios';

  // Pages / Screens
  import Screen from './soon.ios'; 

/* ==============================
  Listing
  =============================== */
  var defaultData = [
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

  var ListViewExample = React.createClass({

  	/**
      * Sets initial state (before JSON retrieved)
      */
  	getInitialState: function() {
  		return {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        isRefreshing: false,
      };
  	},

  	/**
      * Executes after all modules have been loaded
      */
  	componentDidMount: function() {
  	  // Fetch Data
      this._fetchData();
  	},

    /**
      * Executes after all modules have been loaded
      */
    _fetchData: function() {
      var self = this;

      self.setState({ isRefreshing: true });

      self.setState({
        dataSource: self.state.dataSource.cloneWithRows(defaultData),
        isRefreshing: false,
      });
    },


    /**
      * Each Row Item
      */
    _renderRow: function(data) {
      return (
        <ListRow title={data.title.toString()}
          onPress={()=>{
            this.props.navigator.push({
              title: data.title,
              component: Screen,
              index: 2,
              navigator: this.props.navigator,
            });
          }} />
      );
    },

    /**
      * Do Render
      */
    render: function() {
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
  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
    container: {
      paddingBottom: AppConfig.tabBarHeight,
    },
  });

/* ==============================
  Done!
  =============================== */
  module.exports = ListViewExample;
  module.exports.details = {
    title: 'ListViewExample'
  };