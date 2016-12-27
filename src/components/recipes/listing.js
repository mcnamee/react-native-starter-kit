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
  View,
  ListView,
  RefreshControl,
} from 'react-native';

// App Globals
import AppStyles from '@constants/styles';
import AppConfig from '@constants/config';

// Containers
import RecipeCard from '@containers/recipes/card';

// Components
import Error from '@components/general/error';

/* Component ==================================================================== */
class RecipeListing extends Component {
  static componentName = 'RecipeListing';

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    reFetch: PropTypes.func,
  }

  constructor() {
    super();

    this.state = {
      isRefreshing: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.recipes),
      isRefreshing: false,
    });
  }

  /**
    * Refetch Data (Pull to Refresh)
    */
  reFetch = () => {
    if (this.props.reFetch) {
      this.setState({ isRefreshing: true });

      this.props.reFetch()
        .then(() => {
          this.setState({ isRefreshing: false });
        });
    }
  }

  render = () => {
    const { recipes } = this.props;
    const { isRefreshing, dataSource } = this.state;

    if (!isRefreshing && (!recipes || recipes.length < 1)) {
      return <Error text={AppConfig.errors.recipe404} />;
    }

    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={8}
          renderRow={recipe => <RecipeCard recipe={recipe} />}
          dataSource={dataSource}
          contentContainerStyle={[AppStyles.listView]}
          automaticallyAdjustContentInsets={false}
          refreshControl={
            this.props.reFetch ?
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this.reFetch}
                tintColor={AppConfig.theme.primaryColor}
              />
            : null
          }
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeListing;
