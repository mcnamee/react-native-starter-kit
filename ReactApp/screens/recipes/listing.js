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
  Text,
  View,
  Image,
  ListView,
  StyleSheet,
  RefreshControl,
} from 'react-native'

// App Globals
import AppStyles from '../../styles'
import AppConfig from '../../config'
import AppUtil from '../../util'
import AppAPI from '../../api'

// Components
import Card from '../../components/card'
import Error from '../../components/error'
import Loading from '../../components/loading'

// Screens
import RecipeView from './view'

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
  _onPressRow = (title, data) => {
    this.props.navigator.push({
      title: title || '',
      component: RecipeView,
      index: 2,
      transition: 'FloatFromBottom',
      passProps: {
        recipe: data,
      }
    });
  }

  /**
    * Each Row Item
    */
  _renderRow = (data) => {
    let { title, content, better_featured_image } = data;
    title.rendered = AppUtil.HTMLEntitiesDecode(title.rendered);

    // Produce a summary
    content.rendered = AppUtil.HTMLEntitiesDecode(content.rendered);
    content.rendered = AppUtil.stripTags(content.rendered);
    let summary = AppUtil.limitChars(content.rendered, 60);

    // Is there a better way to test this?
    data.featured_image =(
      better_featured_image 
      && typeof better_featured_image != null
      && better_featured_image.media_details 
      && better_featured_image.media_details.sizes
      && better_featured_image.media_details.sizes.medium
      && better_featured_image.media_details.sizes.medium.source_url
    ) ? 
      better_featured_image.media_details.sizes.medium.source_url : '';

    return (
      <Card onPress={()=>{ this._onPressRow(title.rendered, data) }}>
        <View style={[AppStyles.row, AppStyles.paddingBottomSml]}>
          {data.featured_image != '' ?
            <View style={[AppStyles.flex1]}>
              <Image 
                source={{uri: data.featured_image}} 
                style={[styles.listingImage]} />
            </View>
          : null}
          <View style={[AppStyles.flex3, AppStyles.paddingLeftSml]}>
            <Text style={[AppStyles.h3]}>{title.rendered.toString()}</Text>
            <Text style={[AppStyles.baseText]}>{summary.toString()}</Text>
          </View>
        </View>
      </Card>
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
  listingImage: {
    backgroundColor: "#eee",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    resizeMode: 'cover',
  }
});

/* Export Component ==================================================================== */
export default RecipeListing