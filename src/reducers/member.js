export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        return {
          ...state,
          uid: action.data.uid,
          email: action.data.email,
          emailVerified: action.data.emailVerified,
        };
      }
      return {};
    }
    case 'USER_DETAILS_UPDATE': {
      if (action.data) {
        return {
          ...state,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          signedUp: action.data.signedUp,
          role: action.data.role,
        };
      }
      return {};
    }
    case 'USER_RESET': {
      return {};
    }
    default:
      return state;
  }
}
