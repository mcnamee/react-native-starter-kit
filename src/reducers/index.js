import { combineReducers } from 'redux';

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import colors from './colors';
import member from './member';
import recipes from './recipes';

// Combine all
const appReducer = combineReducers({
  colors,
  member,
  recipes,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
