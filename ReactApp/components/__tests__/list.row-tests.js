/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ListRow from '../list.row';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('ListRow renders correcly', () => {
  const tree = renderer.create(
    <ListRow onPress={e => e} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
