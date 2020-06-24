import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import Error from '../../../components/UI/Error';

it('<Error /> renders with message', () => {
  const Component = <Error title="hello boy" />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('hello boy'));
});

it('<Error /> renders with a button', () => {
  const Component = <Error title="hello boy" tryAgain={() => {}} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('hello boy'));
  expect(getByText('Try Again'));
});
