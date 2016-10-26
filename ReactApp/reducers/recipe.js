/**
 * Recipe Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import AppUtil from '../util';

// Set initial state
const initialState = {
	meals: []
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'MEALS_REPLACE':
      let meals = [];
      // Pick out the items to keep
      if (action.data && typeof action.data === 'object') {
        meals = action.data.map((item) => ({
          id: item.id,
          name: AppUtil.HTMLEntitiesDecode(item.name),
          slug: AppUtil.HTMLEntitiesDecode(item.slug),
          description: AppUtil.HTMLEntitiesDecode(item.description),
          count: item.count,
        }));
      }

      return {
      	...state,
      	meals: meals,
    	};
      
    default:
      return state
  }
}