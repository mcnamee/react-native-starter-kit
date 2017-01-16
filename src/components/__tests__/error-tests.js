/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Error from '../general/Error';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Error renders correcly', () => {
  const tree = renderer.create(
    <Error />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
