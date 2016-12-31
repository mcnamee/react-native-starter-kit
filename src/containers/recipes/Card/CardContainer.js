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

// Consts and Libs
import AppUtil from '@lib/util';

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
      id: PropTypes.number,
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }).isRequired,
    updateFavourites: PropTypes.func.isRequired,
    user: PropTypes.shape({
      acf: PropTypes.shape({
        favourite_recipes: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
  }

  constructor(props) {
    super(props);

    const recipe = this.parseRecipeData(props.recipe);
    this.state = {
      recipe,
    };
  }

  componentWillReceiveProps(props) {
    if (props.recipe) {
      const recipe = this.parseRecipeData(props.recipe);
      this.setState({ recipe });
    }
  }

  /**
    * On Press of Card
    */
  onPressCard = () => {
    Actions.recipeView({
      title: this.props.recipe.title.rendered,
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
    * Data from API is a bit messy - clean it up here
    */
  parseRecipeData = (data) => {
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

    return {
      image: recipe.featured_image,
      title: title.rendered,
      content: summary,
    };
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
        image={recipe.image}
        title={recipe.title}
        content={recipe.content}
        onPress={this.onPressCard}
        onPressFavourite={(user && user.id) ? this.onPressFavourite : null}
        isFavourite={(user && user.id && this.isFavourite()) && true}
      />
    );
  }
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
