/**
 * Test to check if the container is created correctly
 */
/* global it expect jest */
import 'react-native';

import ListingContainer from '@containers/recipes/Listing/ListingContainer';

// Check if ListingContainer is created correctly
it('ListingContainer is created correctly', () => {
  expect(typeof ListingContainer).toEqual('function');
});
