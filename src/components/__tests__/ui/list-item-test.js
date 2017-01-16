/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from '@ui/ListItem';

/**
 * Check if ListItem renders correcly
 * and asserting it to the matching snapshot
 */
it('ListItem renders correcly', () => {
  const tree = renderer.create(
    <ListItem />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
