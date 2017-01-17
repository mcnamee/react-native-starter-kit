/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BrowseView from '@containers/recipes/Browse/BrowseView';

it('BrowseView renders correctly', () => {
  // getMeals prop expects a promise
  const mockPromise = new Promise((resolve) => {
    resolve();
  });

  const tree = renderer.create(
    <BrowseView getMeals={() => mockPromise} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
