/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '@ui/Card';

/**
 * Check if card renders correcly
 * and asserting it to the matching snapshot
 */
it('Card renders correcly', () => {
  const tree = renderer.create(
    <Card />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
