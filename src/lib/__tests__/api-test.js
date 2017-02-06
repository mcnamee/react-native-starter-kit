/**
 * Test to check if the API is working as expected
 */
/* global it expect jest */
import 'react-native';

import AppAPI from '@lib/api';

it('Has endpoints available', () => {
  let numberOfEndpoints = 0;

  Object.keys(AppAPI).forEach((endpoint) => {
    numberOfEndpoints += 1;

    expect(endpoint).not.toBe(undefined);
  });

  expect(numberOfEndpoints).not.toBe(0);
});

it('Has REST methods available', () => {
  const excludedEndpoints = [
    'handleError',
    'getToken',
    'deleteToken',
  ];

  Object.keys(AppAPI).forEach((endpoint) => {
    if (excludedEndpoints.indexOf(endpoint) > -1) return;

    expect(typeof AppAPI[endpoint].get).toEqual('function');
    expect(typeof AppAPI[endpoint].post).toEqual('function');
    expect(typeof AppAPI[endpoint].patch).toEqual('function');
    expect(typeof AppAPI[endpoint].put).toEqual('function');
    expect(typeof AppAPI[endpoint].delete).toEqual('function');
  });
});
