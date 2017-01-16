/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@ui/Button';

/**
 * Check if button renders correcly
 * and asserting it to the matching snapshot
 */
it('Button renders correcly', () => {
  const tree = renderer.create(
    <Button />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
