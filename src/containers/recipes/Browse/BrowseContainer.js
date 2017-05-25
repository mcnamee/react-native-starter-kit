/**
 * Recipe Tabs Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as RecipeActions from '@redux/recipes/actions';

// The component we're mapping to
import RecipeTabsRender from './BrowseView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  meals: state.recipe.meals,
  favourites: state.recipe.favourites,
  userId: (state.user && state.user.localId) ? state.user.localId : null,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getMeals: RecipeActions.getMeals,
  getFavourites: RecipeActions.getFavourites,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTabsRender);
