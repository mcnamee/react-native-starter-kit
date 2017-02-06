/**
 * Recipe Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import AppUtil from '@lib/util';

// Set initial state
export const initialState = {
  meals: [],
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'MEALS_REPLACE': {
      let meals = [];

      // Pick out the items to keep
      if (action.data && typeof action.data === 'object') {
        meals = action.data.map(item => ({
          id: item.id,
          name: AppUtil.htmlEntitiesDecode(item.name),
          slug: AppUtil.htmlEntitiesDecode(item.slug),
          description: AppUtil.htmlEntitiesDecode(item.description),
          count: item.count,
        }));
      }

      return {
        ...state,
        meals,
      };
    }
    default:
      return state;
  }
}
