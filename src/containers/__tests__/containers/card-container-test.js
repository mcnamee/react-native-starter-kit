/**
 * Test to check if the container is created correctly
 */
/* global it expect jest */

import 'react-native';

import CardContainer from '@containers/recipes/Card/CardContainer';

// Check if CardContainer is created correctly
it('CardContainer is created correctly', () => {
  expect(typeof CardContainer).toEqual('function');
});
