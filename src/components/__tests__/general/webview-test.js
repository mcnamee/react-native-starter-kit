/**
 * Test to check if the component renders correctly
 */
/* global it expect */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import WebView from '@components/general/WebView';

/**
 * Check if WebView renders correcly
 * and asserting it to the matching snapshot
 */
it('WebView renders correcly', () => {
  const tree = renderer.create(
    <WebView url={'http://google.com'} onNavigationStateChange={() => {}} />,
  );

  expect(tree).toMatchSnapshot();
});
