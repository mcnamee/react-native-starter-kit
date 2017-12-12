import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Card, Text, ListItem } from 'react-native-elements';
import ErrorMessages from '../../constants/errors';
import Error from './Error';

const RecipeView = ({
  error,
  recipes,
  recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let recipe = null;
  if (recipeId && recipes) {
    recipe = recipes.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  }

  // Recipe not found
  if (!recipe) return <Error content={ErrorMessages.recipe404} />;

  // Build Ingredients listing
  const ingredients = recipe.ingredients.map(item => (
    <ListItem key={item} title={item} rightIcon={{ style: { opacity: 0 } }} />
  ));

  // Build Method listing
  const method = recipe.method.map(item => (
    <ListItem key={item} title={item} rightIcon={{ style: { opacity: 0 } }} />
  ));

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 15, paddingTop: 30, paddingBottom: 20 }}>
        <Text h4>{recipe.title}</Text>
        <Text>by {recipe.author}</Text>
      </View>

      <Card title="About this recipe">
        <View>
          <Text>{recipe.body}</Text>
        </View>
      </Card>

      <Card title="Ingredients">
        {ingredients}
      </Card>

      <Card title="Method">
        {method}
      </Card>
    </ScrollView>
  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;
