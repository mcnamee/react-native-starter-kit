import formatErrors from '../../lib/format-error-messages';

it('Errors to be in a consistent format', () => {
  // Object passed
  expect(formatErrors({ message: 'Hi!' })).toStrictEqual(new Error('Hi!'));

  // Error passed
  expect(formatErrors(new Error('Hi!'))).toStrictEqual(new Error('Hi!'));

  // Laravel Error Object passed
  const validationError = {
    message: '422 Unprocessable Entity',
    errors: {
      firstName: ['The first name must be a valid name.'],
      email: ['The email must be a valid email address.'],
    },
  };
  expect(formatErrors(validationError))
    .toStrictEqual(new Error('The first name must be a valid name.The email must be a valid email address.'));
});
