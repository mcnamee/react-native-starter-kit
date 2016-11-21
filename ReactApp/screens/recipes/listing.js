/**
 * Recipe Listing Screen
 *  - Shows a list of receipes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';

// App Globals
import AppStyles from '../../styles';
import AppConfig from '../../config';
import AppUtil from '../../util';
import AppAPI from '../../api';

// Components
import Error from '../../components/error';
import Loading from '../../components/loading';

// Screens
import RecipeView from './view';

/* Component ==================================================================== */
class RecipeListing extends Component {
  static componentName = 'RecipeListing';

  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    meal: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isRefreshing: false,
      data: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount = () => {
    this.fetchData();
  }

  /**
    * Each Row Item
    */
  onPressRow = (title, data) => {
    this.props.navigator.push({
      title: title || '',
      component: RecipeView,
      index: 2,
      transition: 'FloatFromBottom',
      passProps: {
        recipe: data,
      },
    });
  }

  /**
    * Fetch Data from API
    */
  fetchData = () => {
    const { meal } = this.props;

    // Forgot to pass in a category?
    if (!meal) {
      this.setState({
        error: 'Missing meal definition',
      });
    }

    this.setState({ isRefreshing: true });

    AppAPI.recipes.get({ recipe_meal: meal })
      .then((res) => {
        this.setState({
          data: res,
          dataSource: this.state.dataSource.cloneWithRows(res),
          isRefreshing: false,
          loading: false,
        });
      }).catch((err) => {
        const error = AppAPI.handleError(err);
        this.setState({
          data: [],
          error,
          loading: false,
          isRefreshing: false,
        });
      });
  }

  /**
    * Each Row Item
    */
  renderRow = (data) => {
    const recipe = data;
    const { title, content } = data;
    const featuredImg = data.better_featured_image;
    title.rendered = AppUtil.htmlEntitiesDecode(title.rendered);

    // Produce a summary
    content.rendered = AppUtil.htmlEntitiesDecode(content.rendered);
    content.rendered = AppUtil.stripTags(content.rendered);
    const summary = AppUtil.limitChars(content.rendered, 60);

    // Is there a better way to test this?
    recipe.featured_image = (
      featuredImg &&
      featuredImg.media_details &&
      featuredImg.media_details.sizes &&
      featuredImg.media_details.sizes.medium &&
      featuredImg.media_details.sizes.medium.source_url
    ) ?
      featuredImg.media_details.sizes.medium.source_url : '';

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this.onPressRow(title.rendered, recipe)}
      >
        <Card
          {...AppConfig.cardDefaults}
          image={recipe.featured_image && { uri: recipe.featured_image }}
        >
          <View style={[AppStyles.paddingBottomSml]}>
            <Text style={[AppStyles.h3]}>{title.rendered.toString()}</Text>
            <Text style={[AppStyles.baseText]}>{summary.toString()}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }

  render = () => {
    if (this.state.loading) return <Loading />;
    if (this.state.error) return <Error text={this.state.error} />;

    if (!this.state.data || this.state.data.length < 1) {
      return <Error text={'Nothing found'} />;
    }

    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={8}
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
          contentContainerStyle={[AppStyles.listView]}
          style={[{ marginBottom: 20 }]}
          automaticallyAdjustContentInsets={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.fetchData}
              tintColor={AppConfig.primaryColor}
            />
          }
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeListing;
