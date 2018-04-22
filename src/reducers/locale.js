import { DEFAULT_LOCALE } from '../i18n/i18n';

export const initialState = {
  userLocale: DEFAULT_LOCALE,
};

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOCALE_REPLACE': {
      return {
        ...state,
        userLocale: action.data,
      };
    }
    default:
      return state;
  }
}
