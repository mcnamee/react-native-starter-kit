/**
 * Recipe Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Firebase, FirebaseRef } from '@constants/';

/**
  * Get this User's Favourite Recipes
  */
export function getFavourites() {
  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  return (dispatch) => {
    const ref = FirebaseRef.child(`favourites/${UID}`);

    return ref.once('value').then((snapshot) => {
      const favs = snapshot.val() || {};

      return dispatch({
        type: 'FAVOURITES_REPLACE',
        data: favs,
      });
    });
  };
}

/**
  * Update My Favourites Recipes
  */
export function replaceFavourites(newFavourites) {
  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  return dispatch =>
    FirebaseRef.child(`favourites/${UID}`).set(newFavourites)
      .then(() => dispatch({
        type: 'FAVOURITES_REPLACE',
        data: newFavourites,
      }));
}

/**
  * Get Meals
  */
export function getMeals() {
  return (dispatch) => {
    const ref = FirebaseRef.child('meals');

    return ref.once('value').then((snapshot) => {
      const meals = snapshot.val() || {};

      return dispatch({
        type: 'MEALS_REPLACE',
        data: meals,
      });
    });
  };
}

/**
  * Get Recipes
  */
export function getRecipes() {
  return (dispatch) => {
    const ref = FirebaseRef.child('recipes');

    return ref.once('value').then((snapshot) => {
      const recipes = snapshot.val() || {};

      return dispatch({
        type: 'RECIPES_REPLACE',
        data: recipes,
      });
    });
  };
}
