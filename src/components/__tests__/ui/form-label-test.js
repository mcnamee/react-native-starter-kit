/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FormLabel from '@ui/FormLabel';

it('FormLabel renders correctly', () => {
  const tree = renderer.create(
    <FormLabel>John Smith</FormLabel>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
