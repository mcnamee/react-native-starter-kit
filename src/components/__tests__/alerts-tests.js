/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Alerts from '../ui/Alerts';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Alerts renders correcly', () => {
  const tree = renderer.create(
    <Alerts />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
