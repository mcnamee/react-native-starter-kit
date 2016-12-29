/**
 * API Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

export default {
  // The URL we're connecting to
  hostname: 'http://wp-api.mcnam.ee',

  // Map shortnames to the actual endpoints, so that we can
  // use them like so: AppAPI.ENDPOINT_NAME.METHOD()
  //  NOTE: They should start with a /
  //    eg.
  //    - AppAPI.recipes.get()
  //    - AppAPI.users.post()
  //    - AppAPI.favourites.patch()
  //    - AppAPI.blog.delete()
  endpoints: new Map([
    ['login', '/wp-json/jwt-auth/v1/token'],
    ['users', '/wp-json/wp/v2/users'],
    ['me', '/wp-json/wp/v2/users/me'],
    ['recipes', '/wp-json/wp/v2/recipes'],
    ['meals', '/wp-json/wp/v2/recipe_meal'],
  ]),
};
