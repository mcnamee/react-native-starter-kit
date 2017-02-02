/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import { Alert } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@ui/Button';

// Default Button Press function
const onPress = () => Alert.alert('Hey Tester');

it('Button renders correctly', () => {
  const tree = renderer.create(
    <Button />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with onPress renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with Text renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} title={'Test Button'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Outlined Button renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} outlined />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Outlined Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} outlined icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Small Button renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} small />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Small Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} small icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Large Button renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} small />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Large Button with Icon renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={onPress} large icon={{ name: 'code' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
