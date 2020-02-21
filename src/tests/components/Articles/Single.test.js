import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import ArticlesSingle from '../../../components/Articles/Single';
import { errorMessages } from '../../../constants/messages';

it('<ArticlesSingle /> shows a nice error message', () => {
  const Component = <ArticlesSingle article={{}} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText(errorMessages.articles404));
});

it('<ArticlesSingle /> shows an article correctly', () => {
  const article = {
    id: 0,
    name: 'ABC',
    excerpt: 'DEF',
    content: 'DEF',
    date: '22/33/44',
  };

  const Component = <ArticlesSingle article={article} />;

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText(article.name));
});
