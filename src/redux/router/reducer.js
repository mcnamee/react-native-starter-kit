/**
 * Router Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { ActionConst } from 'react-native-router-flux';

// Set initial state
const initialState = {
  scene: {},
};

export default function routerReducer(state = initialState, action) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS :
      return {
        ...state,
        scene: action.scene,
      };

    // ...other actions

    default :
      return state;
  }
}
