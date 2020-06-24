/**
 * Uppercase the first letter in a string
 * @param {str} str
 * @return {str}
 */
export const ucfirst = (string) => {
  if (!string) {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Uppercase the first letter in a string
 * @param {str} input content
 * @param {num} number of words to cut off at
 * @return {str}
 */
export const truncate = (inputContent, numWords) => {
  if (!inputContent) {
    return '';
  }
  const limit = !numWords ? 100 : numWords;

  // Trim whitespace
  let content = inputContent.trim();

  // Convert the content into an array of words
  const contentArr = content.split(' ');

  // Remove any words above the limit
  content = contentArr.slice(0, limit);

  // Convert the array of words back into a string
  return `${content.join(' ')}${contentArr.length > limit ? '…' : ''}`;
};

/**
 * Strip any HTML from a string
 * @param {str} string
 */
export const stripHtml = (string) => {
  let returnString = string;

  // Remove DOM tags
  returnString = returnString.replace(/<[^>]*>?/gm, '');

  // Remove entities
  const entities = [
    ['amp', '&'],
    ['apos', "'"],
    ['#x27', "'"],
    ['#x2F', '/'],
    ['#39', "'"],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"'],
    ['hellip', '...'],
    ['#8217', "'"],
    ['#8230', '...'],
    ['#8211', '-'],
  ];

  entities.map((item) => { // eslint-disable-line
    returnString = returnString.replace(new RegExp(`&${item[0]};`, 'g'), item[1]);
  });

  return returnString;
};
