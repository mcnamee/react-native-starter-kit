/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { List, ListItem } from '@ui';

it('List renders correctly', () => {
  const tree = renderer.create(
    <List>
      <ListItem title={'Hello'} />
      <ListItem title={'Second'} />
    </List>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
