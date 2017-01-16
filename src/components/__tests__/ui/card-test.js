/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '@ui/Card';

/**
 * Check if card renders correctly
 * and asserting it to the matching snapshot
 */
it('Card renders correctly', () => {
  const tree = renderer.create(
    <Card />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
