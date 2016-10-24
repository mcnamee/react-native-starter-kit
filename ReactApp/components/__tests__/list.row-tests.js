/**
 * Test to check if the component renderes correctly
 */
'use strict'

import 'react-native'
import React from 'react'
import ListRow from '../list.row'
import renderer from 'react-test-renderer'

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('ListRow renders correcly', () => {

  const tree = renderer.create(
    <ListRow onPress={ e => e}/>
  ).toJSON()

  expect(tree).toMatchSnapshot()

});
