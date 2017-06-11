/**
 * Test to check if a reducer is working as expected
 */
/* global it expect */
import 'react-native';

import routerReducer, { initialState } from '@redux/router/reducer';
import { ActionConst } from 'react-native-router-flux';

it('Updates the state of the router', () => {
  expect(routerReducer(initialState, ActionConst)).toEqual({
    ...initialState,
    scene: {},
  });
});
