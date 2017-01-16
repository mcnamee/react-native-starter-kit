/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TabIcon from '@ui/TabIcon';

/**
 * Check if loader renders correctly
 * and asserting it to the matching snapshot
 */
it('TabIcon renders correctly', () => {
  const tree = renderer.create(
    <TabIcon icon={'help'} selected />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
