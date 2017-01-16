/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LoginView from '@containers/auth/Login/LoginView';

/**
 * Check if LoginView renders correcly
 * and asserting it to the matching snapshot
 */

// Login prop expects a promise
const mockPromise = new Promise((resolve) => {
  resolve();
});

it('LoginView renders correcly', () => {
  const tree = renderer.create(
    <LoginView navigator={jest.fn()} login={() => mockPromise} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
