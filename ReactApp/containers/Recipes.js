/**
 * Recipe Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as RecipeActions from '../actions/recipe';

// The component we're mapping to
import RecipeTabs from '../components/recipes/tabs';

const mapStateToProps = state => ({
  meals: state.recipe.meals,
});

const mapDispatchToProps = {
  getMeals: RecipeActions.getMeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTabs);
