/**
 * List of Recipes for a Meal Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import * as RecipeActions from '@redux/recipes/actions';

// Components
import Loading from '@components/general/Loading';
import RecipeListingRender from './ListingView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  recipes: state.recipe.recipes || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getRecipes: RecipeActions.getRecipes,
};

/* Component ==================================================================== */
class MealListing extends Component {
  static componentName = 'MealListing';

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object),
    meal: PropTypes.string.isRequired,
    getRecipes: PropTypes.func.isRequired,
  }

  static defaultProps = {
    recipes: [],
  }

  state = {
    loading: false,
    recipes: [],
  }

  componentDidMount = () => this.getThisMealsRecipes(this.props.recipes);
  componentWillReceiveProps = props => this.getThisMealsRecipes(props.recipes);

  /**
    * Pick out recipes that are in the current meal
    * And hide loading state
    */
  getThisMealsRecipes = (allRecipes) => {
    if (allRecipes.length > 0) {
      const recipes = allRecipes.filter(recipe =>
        recipe.category.toString() === this.props.meal.toString(),
      );

      this.setState({
        recipes,
        loading: false,
      });
    }
  }

  /**
    * Fetch Data from API
    */
  fetchRecipes = () => this.props.getRecipes()
    .then(() => this.setState({ error: null, loading: false }))
    .catch(err => this.setState({ error: err.message, loading: false }))

  render = () => {
    if (this.state.loading) return <Loading />;

    return (
      <RecipeListingRender
        recipes={this.state.recipes}
        reFetch={this.fetchRecipes}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealListing);
