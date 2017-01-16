/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Error from '@general/Error';

/**
 * Check if error renders correctly
 * and asserting it to the matching snapshot
 */
it('Error renders correctly', () => {
  const tree = renderer.create(
    <Error />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
