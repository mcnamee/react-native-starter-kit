/**
 * Test to check if the component renderes correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import WebView from '@components/general/WebView';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('WebView renders correcly', () => {
  const tree = renderer.create(
    <WebView url={'http://google.com'} onNavigationStateChange={jest.fn()} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
