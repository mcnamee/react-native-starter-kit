import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import Header from '../../../components/UI/Header';

it('<Header /> renders with message', () => {
  const Component = <Header title="hello boy" content="I'm here" />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('hello boy'));
  expect(getByText("I'm here"));
});
