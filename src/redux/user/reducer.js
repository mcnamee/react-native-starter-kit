/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        const input = action.data;
        return {
          uid: input.uid,
          email: input.email,
          emailVerified: input.emailVerified,
          displayName: input.displayName,
          phoneNumber: input.phoneNumber,
          photoURL: input.photoURL,
        };
      }
      return {};
    }
    case 'USER_LOGOUT': {
      return {};
    }
    default:
      return state;
  }
}
