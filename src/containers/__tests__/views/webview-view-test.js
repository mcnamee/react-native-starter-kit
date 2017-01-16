/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import WebView from '@containers/auth/WebView';

/**
 * Check if WebView renders correctly
 * and asserting it to the matching snapshot
 */

it('WebView renders correctly', () => {
  const tree = renderer.create(
    <WebView url={'http://google.com'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
