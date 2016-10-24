/**
 * Test to check if the component renderes correctly
 */
'use strict'

import 'react-native'
import React from 'react'
import Button from '../button'
import renderer from 'react-test-renderer'

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Button renders correcly', () => {

  const tree = renderer.create(
    <Button />
  ).toJSON()

  expect(tree).toMatchSnapshot()

});
