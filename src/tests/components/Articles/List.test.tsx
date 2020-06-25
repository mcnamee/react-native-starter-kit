import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import ArticlesList from '../../../components/Articles/List';
import { errorMessages } from '../../../constants/messages';
import { List } from '../../../types/List';

it('<ArticlesList /> shows a nice error message', () => {
  const Component = <ArticlesList listFlat={[]} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText(errorMessages.articlesEmpty));
});

it('<ArticlesList /> shows a list of articles correctly', () => {
  const listItem: List = {
    id: 0,
    name: 'ABC',
    excerpt: 'DEF',
    placeholder: true,
    content: '',
    image: undefined,
    contentRaw: '',
    slug: null,
    link: null,
    date: '22/33/44',
  };

  const Component = <ArticlesList listFlat={[listItem]} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText(listItem.name));
});
