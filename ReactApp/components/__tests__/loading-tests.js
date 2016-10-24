/**
 * Test to check if the component renderes correctly
 */
'use strict';

import 'react-native'
import React from 'react'
import Loading from '../loading'
import renderer from 'react-test-renderer'

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Loading renders correcly', () => {

  const tree = renderer.create(
    <Loading />
  ).toJSON()

  expect(tree).toMatchSnapshot()

});
