/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import List from '@ui/List';

/**
 * Check if list renders correcly
 * and asserting it to the matching snapshot
 */
it('List renders correcly', () => {
  const tree = renderer.create(
    <List />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
