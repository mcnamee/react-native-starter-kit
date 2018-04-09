import {
  DEFAULT_LOCALE,
  locales,
} from '../i18n/i18n';

export function changeLocale(data) {
  let { userLocale } = data;
  return dispatch => new Promise((resolve) => {
    // Validate locale
    if (!locales.includes(userLocale)) {
      userLocale = DEFAULT_LOCALE;
    }

    console.log('userLocale: ', userLocale);
    return resolve(dispatch({
      type: 'LOCALE_REPLACE',
      data: userLocale,
    }));
  });
}
