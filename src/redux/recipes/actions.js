/**
 * Recipe Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import AppAPI from '@lib/api';

export function getMeals() {
  return (dispatch) => {
    return AppAPI.meals.get()
      .then((res) => {
        dispatch({
          type: 'MEALS_REPLACE',
          data: res,
        });
      });
  };
}
