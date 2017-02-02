/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '@ui/Card';

it('Card renders correctly', () => {
  const tree = renderer.create(
    <Card><Text>Hello world</Text></Card>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Card w/ Title renders correctly', () => {
  const tree = renderer.create(
    <Card title={'With Title'}><Text>Hello world</Text></Card>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Card w/ Image renders correctly', () => {
  const tree = renderer.create(
    <Card image={require('../../../images/image.png')}><Text>Hello world</Text></Card>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
