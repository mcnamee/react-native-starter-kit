/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BrowseView from '@containers/recipes/Browse/BrowseView';

/**
 * Check if BrowseView renders correctly
 * and asserting it to the matching snapshot
 */

it('BrowseView renders correctly', () => {
  const tree = renderer.create(
    <BrowseView getMeals={jest.fn()} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
