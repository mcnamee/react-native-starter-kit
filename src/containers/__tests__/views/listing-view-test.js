/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ListingView from '@containers/recipes/Listing/ListingView';

/**
 * Check if ListingView renders correcly
 * and asserting it to the matching snapshot
 */

it('ListingView renders correcly', () => {
  const theseRecipes = [
    { image: 'http://placehold.it/300x100', title: 'A Cake', content: 'Lorem ipsum' },
    { image: 'http://placehold.it/300x100', title: 'A Muffin', content: 'Lorem ipsum' },
  ];

  const tree = renderer.create(
    <ListingView recipes={theseRecipes} reFetch={jest.fn()} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
