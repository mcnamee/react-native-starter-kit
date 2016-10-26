/**
 * Recipe Listing SCREEN
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
import AppStyles from '../styles'
import AppConfig from '../config'
import AppUtil from '../util'
import AppAPI from '../api'

// Components
import ListRow from '../components/list.row'
import Error from '../components/error'
import Loading from '../components/loading'

// Screens
import Screen from './soon'


/* Component ==================================================================== */
class RecipeListing extends Component {
  static componentName = 'RecipeListing';

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      loading: true,
      isRefreshing: false,
      data: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
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
    * Fetch Data from API
    */
  _fetchData = () => {
    let { meal } = this.props;

    // Forgot to pass in a category
    if (!meal) {
      this.setState({
        error: 'Missing meal definition',
      });
    }

    this.setState({ isRefreshing: true });

    AppAPI.recipes.get({ recipe_meal: meal })
      .then(res => {
        this.setState({
          data: res,
          dataSource: this.state.dataSource.cloneWithRows(res),
          isRefreshing: false,
          loading: false,
        });

      }).catch(err => {
        let error = AppAPI.handleError(err);
        this.setState({
          data: [],
          error: error,
          loading: false,
          isRefreshing: false,
        });
      });
  }

  /**
    * Each Row Item
    */
  _renderRow = (data) => {
    let { title, image } = data;
    title.rendered = AppUtil.HTMLEntitiesDecode(title.rendered);

    return (
      <ListRow title={title.rendered.toString()}
        image={!this.props.noImages ? image : null}
        onPress={()=>{
          this.props.navigator.push({
            title: title.rendered,
            component: Screen,
            index: 2,
            transition: 'FloatFromBottom',
          });
        }} />
    );
  }

  /**
    * RENDER
    */
  render = () => {
    if (this.state.loading) return <Loading />;
    if (this.state.error) return <Error text={this.state.error} />;
    
    if (!this.state.data || this.state.data.length < 1) 
      return <Error text={'Nothing found'} />;

    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={8}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          contentContainerStyle={AppStyles.paddingBottom} 
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
});

/* Export Component ==================================================================== */
export default RecipeListing