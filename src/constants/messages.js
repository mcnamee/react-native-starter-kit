export const generalMessages = {};

export const successMessages = {};

export const errorMessages = {
  // Defaults
  default: 'Hmm, an unknown error occured',
  timeout: 'Server Timed Out. Check your internet connection',
  invalidJson: 'Response returned is not valid JSON',

  // Firebase Related
  invalidFirebase: 'Firebase is not connected correctly',

  // Member
  memberNotAuthd: 'You need to be logged in, to update your profile',
  memberExists: 'Member already exists',
  missingFirstName: 'First name is missing',
  missingLastName: 'Last name is missing',
  missingEmail: 'Email is missing',
  missingPassword: 'Password is missing',
  passwordsDontMatch: 'Passwords do not match',

  // Recipes
  recipe404: 'Recipe not found',
  missingMealId: 'Missing meal definition',
};
