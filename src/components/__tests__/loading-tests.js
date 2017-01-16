/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '@general/Loading';

/**
 * Check if loader renders correcly
 * and asserting it to the matching snapshot
 */
it('Loading renders correcly', () => {
  const tree = renderer.create(
    <Loading />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
