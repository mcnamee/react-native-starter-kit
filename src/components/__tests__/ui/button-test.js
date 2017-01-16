/**
 * Test to check if the component renders correctly
 */
/* global it expect alert */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@ui/Button';

it('Button renders correctly', () => {
  const tree = renderer.create(
    <Button />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with onPress renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={() => alert('Hey Tester')} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with Text renders correctly', () => {
  const tree = renderer.create(
    <Button title={'Test Button'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Outlined Button renders correctly', () => {
  const tree = renderer.create(
    <Button outlined />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Outlined Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button outlined icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Small Button renders correctly', () => {
  const tree = renderer.create(
    <Button small />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Small Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button small icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Large Button renders correctly', () => {
  const tree = renderer.create(
    <Button small />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Large Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button large icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
