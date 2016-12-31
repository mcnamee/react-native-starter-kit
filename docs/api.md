# Interacting with a Rest API

`/src/lib/api.js` is a nice and simple little utility to interact with our RESTful APIs. We've kept it as a modifiable lib so that we can edit it on a per-project basis to deal with a variety of circumstances.

The API util allows us to make API calls in a nice, shorthand way, eg.

```
  // Get all recipes
  AppAPI.recipes.get();

  // Get recipe with ID 33
  AppAPI.recipes.get(33);

  // Post data to create a new blog post
  AppAPI.blog.post({ title: 'Blogger', content: 'Lorem Ipsum' });

  // Patch data to the 'users' endpoint
  // - Update user with ID 231, with the payload in the second param
  AppAPI.users.patch(231, { first_name: 'Frank', last_name: 'Jackson' });

  // Delete blog with ID of 52
  AppAPI.blog.delete(52);
```

## Configuration

Configuration should be fairly straightforward. Within `/src/constants/api.js` - you can edit the hostname and endpoints that you're using.

## JWT Authentication

We've setup JWT Authentication as a default to show how it can work. Basically:

- The app asks the API for a token (by sending user credentials to the API)
- If the credentials are correct, the API will send back a JWT token
- The App stores this token in AsyncStorage and will provide this token within a `Authorization: Bearer ...` header for all future requests
- The API will then use this token to Authorize the request against secured endpoints - eg. perhaps you need to be logged in, to list user data - if the token is correct, the API will provide the correct data, otherwise it'll likely provide an error message

*You can turn off JWT Auth in `/lib/api.js` by simply making `const Token = {};` equal an empty object.
