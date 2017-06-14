/**
 * Test to check if the container is created correctly
 */
/* global it expect */
import 'react-native';

import LoginContainer from '@containers/auth/Forms/LoginContainer';

// Check if FormContainer is created correctly
it('LoginContainer is created correctly', () => {
  expect(typeof LoginContainer).toEqual('function');
});
