/**
 * List of Recipes for a Meal Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// App Globals
import AppAPI from '../../lib/api';
import AppConfig from '../../config/';

// Components
import Error from '../../components/general/error';
import Loading from '../../components/general/loading';
import RecipeListing from '../../components/recipes/listing';

/* Redux ==================================================================== */
// Actions
// import * as UserActions from '../../reducers/user/actions';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

/* Component ==================================================================== */
class MealListing extends Component {
  static componentName = 'MealListing';

  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
    meal: PropTypes.string.isRequired,
  }

  constructor() {
    super();

    this.state = {
      loading: false,
      error: null,
      recipes: [],
    };
  }

  componentDidMount = () => {
    this.fetchRecipes();
  }

  /**
    * Fetch Data from API
    */
  fetchRecipes = () => {
    const { meal } = this.props;

    // Forgot to pass in a category?
    if (!meal) {
      this.setState({
        error: AppConfig.errors.missingMealId,
      });
    }

    return AppAPI.recipes.get({ recipe_meal: meal })
      .then((res) => {
        this.setState({
          recipes: res,
          loading: false,
          error: null,
        });
      }).catch((err) => {
        const error = AppAPI.handleError(err);

        this.setState({
          recipes: [],
          error,
          loading: false,
        });
      });
  }

  render = () => {
    const { loading, error, recipes } = this.state;

    if (loading) return <Loading />;
    if (error) return <Error text={error} />;

    return (
      <RecipeListing
        recipes={recipes}
        reFetch={this.fetchRecipes}
        navigator={this.props.navigator}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealListing);
