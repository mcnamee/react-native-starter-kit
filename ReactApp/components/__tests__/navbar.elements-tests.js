/**
 * Test to check if the component renderes correctly
 */
'use strict';

import 'react-native'
import React from 'react'
import NavbarElements from '../navbar.elements'
import renderer from 'react-test-renderer'

/*
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Navbar title renders correcly', () => {

  const tree = renderer.create(
    <NavbarElements.Title />
  ).toJSON()

  expect(tree).toMatchSnapshot()

});


/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Navbar left button renders correcly', () => {

  const tree = renderer.create(
    <NavbarElements.LeftButton
       onPress={ e => e}
       icon='ios-menu-outline'
     />
  ).toJSON()

  expect(tree).toMatchSnapshot()

});
