/**
 * Test to check if the component renderes correctly
 */
 /* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NavbarElements from '../ui/navbar.elements';

/*
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Navbar title renders correcly', () => {
  const tree = renderer.create(
    <NavbarElements.Title />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('Navbar left button renders correcly', () => {
  const tree = renderer.create(
    <NavbarElements.LeftButton
      onPress={e => e}
      icon={'ios-menu-outline'}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
