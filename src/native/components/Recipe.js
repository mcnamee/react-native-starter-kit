import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Card, CardItem, Body, List, ListItem, Text } from 'native-base';
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
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item}</Text>
    </ListItem>
  ));

  // Build Method listing
  const method = recipe.method.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item}</Text>
    </ListItem>
  ));

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 15, paddingTop: 30, paddingBottom: 20 }}>
        <Text h4>{recipe.title}</Text>
        <Text>by {recipe.author}</Text>
      </View>

      <Card>
        <CardItem header>
          <Text>About this recipe</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{recipe.body}</Text>
          </Body>
        </CardItem>
      </Card>

      <Card>
        <CardItem header>
          <Text>Ingredients</Text>
        </CardItem>
        <CardItem>
          <Body>
            <List>
              {ingredients}
            </List>
          </Body>
        </CardItem>
      </Card>

      <Card>
        <CardItem header>
          <Text>Method</Text>
        </CardItem>
        <CardItem>
          <Body>
            <List>
              {method}
            </List>
          </Body>
        </CardItem>
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
