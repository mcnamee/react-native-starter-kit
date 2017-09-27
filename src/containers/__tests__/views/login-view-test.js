/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FormView from '@containers/auth/Forms/FormView';

// Login prop expects a promise
const mockPromise = new Promise(resolve => resolve());

it('FormView renders correctly', () => {
  const tree = renderer.create(
    <FormView
      login={() => mockPromise}
      signUp={() => mockPromise}
      resetPassword={() => mockPromise}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
