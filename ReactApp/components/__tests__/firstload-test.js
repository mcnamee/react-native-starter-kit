/**
 * Test to check if the component renderes correctly
 */
 /* global it expect */
 
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FirstLoad from '../first.load';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('FirstLoad renders correcly', () => {
  const tree = renderer.create(
    <FirstLoad navigator={{ replace: () => {} }} login={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
