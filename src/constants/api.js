/**
 * API Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { APIKEY } from 'react-native-dotenv';

// The URL we're connecting to
const authHostname = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const hostname = 'https://react-native-starter-app.firebaseio.com';

// Secret key to access API
const apiKey = APIKEY || '123';

export default {
  // Map shortnames to the actual endpoints, so that we can
  // use them like so: AppAPI.ENDPOINT_NAME.METHOD()
  //  NOTE: They should start with a /
  //    eg.
  //    - AppAPI.recipes.get()
  //    - AppAPI.users.post()
  //    - AppAPI.favourites.patch()
  //    - AppAPI.blog.delete()
  endpoints: new Map([
    ['login', `${authHostname}/verifyPassword?key=${apiKey}`], // If you change the key, update the reference below
    ['signup', `${authHostname}/signupNewUser?key=${apiKey}`],
    ['me', `${authHostname}/getAccountInfo?key=${apiKey}`],

    ['favourites', `${hostname}/favourites/{userId}.json`],
    ['recipes', `${hostname}/recipes.json`],
    ['meals', `${hostname}/meals.json`],
  ]),


  // Which endpoints need authorization to access?
  // - We'll then add the token to the header if needed
  authEnpoints: [
    'me',
    'favourites',
  ],


  // When we want to login with username/password
  // - Which endpoint key deals with our tokens?
  loginEndpointKey: 'login',


  // When we authenticate, the server sends back a payload containing the access token
  // - Which key, within that payload, is our access token?
  tokenKey: 'idToken',


  // When we're sending the username to the API for Auth
  // - What is the name of the key for username?
  usernameKey: 'email',


  // When we're sending the password to the API for Auth
  // - What is the name of the key for password?
  passwordKey: 'password',


  // Should each Auth request contain the Authorization: Bearer {jwttoken} header?
  sendAuthorizationBearerHeader: false,


  // Should each Auth request contain the token in the body?
  sendTokenInBody: true,
  // If so, what key?
  sendTokenInBodyKey: 'idToken',


  // Should each Auth request contain the token as a query param?
  sendTokenInUrl: true,
  // If so, what key?
  sendTokenInUrlKey: 'auth',
};
