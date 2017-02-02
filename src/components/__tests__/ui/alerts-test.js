/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Alerts from '@ui/Alerts';

it('Alerts (empty) renders correctly', () => {
  const tree = renderer.create(
    <Alerts />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Alerts (Sucess) renders correctly', () => {
  const tree = renderer.create(
    <Alerts success={'Hello Success'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Alerts (Error) renders correctly', () => {
  const tree = renderer.create(
    <Alerts error={'Error hey'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Alerts (Status) renders correctly', () => {
  const tree = renderer.create(
    <Alerts status={'Something\'s happening...'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
