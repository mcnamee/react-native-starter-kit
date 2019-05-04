import { Firebase, FirebaseRef } from '../lib/firebase';

export default {
  state: {
    recipes: []
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    replaceMeals(state, payload){
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
  effects: (dispatch) => ({

    /**
      * Get Meals
      */
    getMeals() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise((resolve, reject) => FirebaseRef.child('meals').once('value')
        .then((snapshot) => {
          const data = snapshot.val() || [];
          return resolve(this.replaceMeals(data));
        }).catch(reject)).catch((err) => { throw err.message; });
    },

    /**
      * Get Recipes
      */
    getRecipes() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise(resolve => FirebaseRef.child('recipes')
        .on('value', (snapshot) => {
          const data = snapshot.val() || [];
          return resolve(this.replaceRecipes(data));
        })).catch((err) => { throw err.message; });
    }

  })
}
