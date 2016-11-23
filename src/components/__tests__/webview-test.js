/**
 * Test to check if the component renderes correctly
 */
 /* global it expect */
 
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import WebView from '../webview';

/**
 * Check if alerts renders correcly
 * and asserting it to the matching snapshot
 */
it('WebView renders correcly', () => {
  const tree = renderer.create(
    <WebView url={'http://google.com'} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
