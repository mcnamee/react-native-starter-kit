/**
 * Combine All Reducers
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { combineReducers } from 'redux';

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import router from '@reducers/router/reducer';
import sideMenu from '@reducers/sidemenu/reducer';
import user from '@reducers/user/reducer';
import recipe from '@reducers/recipes/reducer';

// Combine all
const appReducer = combineReducers({
  router,
  sideMenu,
  user,
  recipe,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
