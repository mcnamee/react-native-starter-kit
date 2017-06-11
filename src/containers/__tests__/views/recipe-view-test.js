/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import RecipeView from '@containers/recipes/RecipeView';

it('RecipeView renders correctly', () => {
  const thisRecipe = {
    id: 1,
    title: 'Recipe Title',
    body: 'Blah di blah lorem ipsum',
    image: 'http://placehold.it/300x100',
    ingredients: ['Hello world', 'Hello world', 'Hello world'],
    method: ['And again', 'And again', 'And again'],
  };

  const tree = renderer.create(
    <RecipeView recipe={thisRecipe} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
