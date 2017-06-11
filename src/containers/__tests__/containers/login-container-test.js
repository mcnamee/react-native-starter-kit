/**
 * Test to check if the container is created correctly
 */
/* global it expect */
import 'react-native';

import FormContainer from '@containers/auth/Form/FormContainer';

// Check if FormContainer is created correctly
it('FormContainer is created correctly', () => {
  expect(typeof FormContainer).toEqual('function');
});
