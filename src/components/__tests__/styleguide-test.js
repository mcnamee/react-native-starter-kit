/**
 * Test to check if the component renderes correctly
 */
 /* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import StyleGuide from '../style.guide';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('StyleGuide renders correcly', () => {
  const tree = renderer.create(
    <StyleGuide navigator={{ push: () => {} }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
