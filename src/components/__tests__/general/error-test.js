/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import { Alert } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Error from '@components/general/Error';

it('Error renders correctly', () => {
  const tree = renderer.create(
    <Error text={'We can\'t find that'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Error w/ Try Again Button renders correctly', () => {
  const tree = renderer.create(
    <Error tryAgain={() => { Alert.alert('Hey there'); }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
