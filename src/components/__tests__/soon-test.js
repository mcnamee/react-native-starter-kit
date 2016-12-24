/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Soon from '../general/soon';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Soon renders correcly', () => {
  const tree = renderer.create(
    <Soon navigator={{ push: () => {} }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
