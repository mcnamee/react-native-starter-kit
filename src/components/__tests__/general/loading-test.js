/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '@general/Loading';

/**
 * Check if loader renders correctly
 * and asserting it to the matching snapshot
 */
it('Loading renders correctly', () => {
  const tree = renderer.create(
    <Loading />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
