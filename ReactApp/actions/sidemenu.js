/**
 * Sidemenu Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

export function toggle() {
  return {
    type: 'SIDEMENU_TOGGLE'
  }
}

export function open() {
  return {
    type: 'SIDEMENU_OPEN'
  }
}

export function close() {
  return {
    type: 'SIDEMENU_CLOSE'
  }
}