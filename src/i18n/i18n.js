/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data.
 *
 */
import enTranslationMessages from './translations/en';
import itTranslationMessages from './translations/it';

export const locales = [
  'en',
  'it',
];
export const DEFAULT_LOCALE = 'en';

export default function translate(messages) {
  let translatedMessage = '';
  let locale = DEFAULT_LOCALE;
  switch (locale) {
    case 'en':
      translatedMessage = enTranslationMessages[messages];
      break;
    case 'it':
      translatedMessage = itTranslationMessages[messages];
      break;
    default:
      break;
  }
  console.log('translate called (translatedMessage): ', translatedMessage);
  return translatedMessage;
}

