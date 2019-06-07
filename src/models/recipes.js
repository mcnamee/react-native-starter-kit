import { Firebase, FirebaseRef } from '../lib/firebase';
import initState from '../store/recipes';

export default {
  /**
   *  Initial state
   */
  state: {
    recipes: initState.recipes,
    meals: initState.meals,
  },

  /**
   * Reducers
   */
  reducers: {
    replaceMeals(state, payload) {
      return {
        ...state,
        meals: payload,
      };
    },
    replaceRecipes(state, payload) {
      let recipes = [];
      // Pick out the props I need
      if (payload && typeof payload === 'object') {
        recipes = payload.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
          ingredients: item.ingredients,
          method: item.method,
        }));
      }

      return { ...state, recipes };
    },
  },

  /**
   * Effects/Actions
   */
  effects: () => ({
    /**
     * Get Meals
     *
     * @return {Promise}
     */
    getMeals() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise((resolve, reject) => FirebaseRef.child('meals').once('value')
        .then((snapshot) => {
          const data = snapshot.val() || [];
          this.replaceMeals(data);
          return resolve();
        }).catch(reject)).catch((err) => { throw err.message; });
    },

    /**
      * Get Recipes
      *
     * @return {Promise}
      */
    getRecipes() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise(resolve => FirebaseRef.child('recipes')
        .on('value', (snapshot) => {
          const data = snapshot.val() || [];
          this.replaceRecipes(data);
          return resolve();
        })).catch((err) => { throw err.message; });
    },
  }),
};
