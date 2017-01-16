/**
 * Test to check if the container is created correctly
 */
/* global it expect jest */

import 'react-native';

import LoginContainer from '@containers/auth/Login/LoginContainer';

// Check if LoginContainer is created correctly
it('LoginContainer is created correctly', () => {
  expect(typeof LoginContainer).toEqual('function');
});
