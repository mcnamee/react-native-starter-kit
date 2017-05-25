/**
 * Recipe Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import AppAPI from '@lib/api';

/**
  * Get Favourites
  */
export function getFavourites(userId) {
  return dispatch =>
    AppAPI.favourites.get({ userId })
      .then((res) => {
        dispatch({
          type: 'FAVOURITES_REPLACE',
          data: res,
        });
      });
}

/**
  * Update My Favourites
  */
export function updateFavourites(userId, newFavourites) {
  return dispatch =>
    AppAPI.favourites.put({ userId }, newFavourites)
      .then((res) => {
        dispatch({
          type: 'FAVOURITES_REPLACE',
          data: res,
        });
      });
}


/**
  * Get Meals
  */
export function getMeals() {
  return dispatch =>
    AppAPI.meals.get()
      .then((res) => {
        dispatch({
          type: 'MEALS_REPLACE',
          data: res,
        });
      });
}

/**
  * Reset Meals
  */
export function reset() {
  return {
    type: 'RECIPE_RESET',
  };
}
