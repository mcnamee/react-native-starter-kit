/**
 * Test to check if a reducer is working as expected
 */
/* global it expect jest */
import 'react-native';

import recipeReducer, { initialState } from '@redux/recipes/reducer';
import { getMeals } from '@redux/recipes/actions';

it('Updates the state of recipes', () => {
  expect(recipeReducer(initialState, getMeals())).toEqual({
    ...initialState,
    meals: [],
  });
});
