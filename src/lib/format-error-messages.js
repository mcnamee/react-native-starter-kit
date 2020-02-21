/**
 * Create a readable error message for the front-end user
 */
export default (error) => {
  /*
    For an error response like:
    {
      "message": "422 Unprocessable Entity",
      "errors": {
        "email": [
          "The email must be a valid email address."
        ]
      }
    }
   */
  if (error && error.errors) {
    let errors = '';
    Object.entries(error.errors).forEach((v) => {
      errors += v[1].join(', ');
    });
    return Error(errors);
  }

  /*
    For an error response like:
    {
      "error": {
        "message": "403 Forbidden",
        "status_code": 403
      }
    }
   */
  if (error && error.message) {
    return Error(error.message);
  }

  // When an Error - return the error
  if (error instanceof Error) {
    return error;
  }

  // Otherwise create an error
  return new Error('Uh oh - something happened');
};
