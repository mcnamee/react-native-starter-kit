import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import Messages from '../../../components/UI/Messages';

it('<Messages /> renders with error and message', () => {
  const Component = <Messages message="Success" type="success" />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('Success'));
});

it('<Messages /> renders with error and message', () => {
  const Component = <Messages message="Error" type="error" />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('Error'));
});

it('<Messages /> renders with info and message', () => {
  const Component = <Messages message="Warning" type="info" />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('Warning'));
});
