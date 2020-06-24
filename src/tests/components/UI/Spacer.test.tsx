import React from 'react';
import renderer from 'react-test-renderer';
import Spacer from '../../../components/UI/Spacer';

it('<Spacer /> renders with correctly with size: 10', () => {
  const Component = <Spacer size={10} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();
});

it('<Spacer /> renders with correctly with size: 15', () => {
  const Component = <Spacer size={15} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();
});
