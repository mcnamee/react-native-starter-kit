/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Alerts from '@ui/Alerts';

/**
 * Check if alerts renders correctly
 * and asserting it to the matching snapshot
 */
it('Alerts renders correctly', () => {
  const tree = renderer.create(
    <Alerts />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
