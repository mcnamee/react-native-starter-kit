/**
 * Test to check if a reducer is working as expected
 */
/* global it expect */
import 'react-native';

import sideMenuReducer, { initialState } from '@redux/sidemenu/reducer';
import * as sideMenuActions from '@redux/sidemenu/actions';

it('Updates the state of the side menu to toggle', () => {
  expect(sideMenuReducer(initialState, sideMenuActions.toggle())).toEqual({
    ...initialState,
    isOpen: !initialState.isOpen,
  });
});

it('Updates the state of the side menu to open', () => {
  expect(sideMenuReducer(initialState, sideMenuActions.open())).toEqual({
    ...initialState,
    isOpen: true,
  });
});

it('Updates the state of the side menu to close', () => {
  expect(sideMenuReducer(initialState, sideMenuActions.close())).toEqual({
    ...initialState,
    isOpen: false,
  });
});
