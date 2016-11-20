/**
 * Test to check if the component renderes correctly
 */
'use strict'

import 'react-native'
import React from 'react'
import Error from '../error'
import renderer from 'react-test-renderer'

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Error renders correcly', () => {

  const tree = renderer.create(
    <Error />
  ).toJSON()

  expect(tree).toMatchSnapshot()

});
