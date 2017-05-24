/**
 * Individual Recipe Card Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Actions
import * as UserActions from '@redux/user/actions';

// Components
import RecipeCardRender from './CardView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  updateFavourites: UserActions.updateMe,
};

/* Component ==================================================================== */
class RecipeCard extends Component {
  static componentName = 'RecipeCard';

  static propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,
    updateFavourites: PropTypes.func.isRequired,
    user: PropTypes.shape({
      acf: PropTypes.shape({
        favourite_recipes: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
  }

  static defaultProps = {
    user: null,
  }

  constructor(props) {
    super(props);
    this.state = { recipe: props.recipe };
  }

  componentWillReceiveProps(props) {
    if (props.recipe) {
      this.setState({ recipe: props.recipe });
    }
  }

  /**
    * On Press of Card
    */
  onPressCard = () => {
    Actions.recipeView({
      title: this.props.recipe.title,
      recipe: this.props.recipe,
    });
  }

  /**
    * When user taps to favourite a recipe
    */
  onPressFavourite = () => {
    const recipeId = this.props.recipe.id;

    if (recipeId && this.props.updateFavourites) {
      const favs = (
        this.props.user && this.props.user.acf &&
        this.props.user.acf.favourite_recipes
      )
        ? this.props.user.acf.favourite_recipes
        : null;

      // Build Payload - Update current user favourites
      // Payload should be:
      //   {fields: {favourite_recipes: [{recipe_id: 43}, {recipe_id: 44}]}}
      const arrIdx = this.isFavourite();

      // Remove from current list
      if (arrIdx) favs.splice(arrIdx, 1);
      // Add to current list
      else favs.push({ recipe_id: recipeId });

      // Send new list to API
      this.props.updateFavourites({ fields: { favourite_recipes: favs } });
    }
  }


  /**
    * Check in Redux to find if this Recipe ID is a Favourite
    */
  isFavourite = () => {
    const { user, recipe } = this.props;

    if (recipe && recipe.id) {
      if (user && user.acf && user.acf.favourite_recipes) {
        const recipeId = recipe.id;
        const favs = user.acf.favourite_recipes;

        // Return true if this recipe is in favourites list
        let result = false;
        favs.forEach((obj, key) => {
          if (String(recipeId) === String(obj.recipe_id)) {
            result = key;
          }
        });

        return result;
      }
    }

    return false;
  }

  render = () => {
    const { recipe } = this.state;
    const { user } = this.props;

    return (
      <RecipeCardRender
        title={recipe.title}
        body={recipe.body}
        image={recipe.image}
        onPress={this.onPressCard}
        onPressFavourite={(user && user.id) ? this.onPressFavourite : null}
        isFavourite={(user && user.id && this.isFavourite()) && true}
      />
    );
  }
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
