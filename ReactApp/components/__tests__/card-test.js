/**
 * Test to check if the component renderes correctly
 */
/* global it expect */

import {
  View,
  Text,
} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../card';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Card renders correcly', () => {
  const tree = renderer.create(
    <Card>
      <View><Text>Hello World!</Text></View>
    </Card>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
