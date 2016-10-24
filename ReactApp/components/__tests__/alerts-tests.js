/**
 * Test to check if the component renderes correctly
 */
'use strict'

import 'react-native'
import React from 'react'
import Alerts from '../alerts'
import renderer from 'react-test-renderer'

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Alerts renders correcly', () => {

  const tree = renderer.create(
    <Alerts />
  ).toJSON()

  expect(tree).toMatchSnapshot()

});
