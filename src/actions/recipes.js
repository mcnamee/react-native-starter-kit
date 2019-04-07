import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get Meals
  */
export function getMeals() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise((resolve, reject) => FirebaseRef.child('meals').once('value')
    .then((snapshot) => {
      const data = snapshot.val() || [];
      return resolve(dispatch({ type: 'MEALS_REPLACE', data }));
    }).catch(reject)).catch((err) => { throw err.message; });
}

/**
  * Get Recipes
  */
export function getRecipes() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('recipes')
    .on('value', (snapshot) => {
      const data = snapshot.val() || [];
      return resolve(dispatch({ type: 'RECIPES_REPLACE', data }));
    })).catch((err) => { throw err.message; });
}
