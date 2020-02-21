import pagination from '../../lib/pagination';

it('lib/pagination: pagination returns correctly', () => {
  const threePages = pagination(3, '/articles/');
  expect(threePages).toEqual([
    { title: 1, link: '/articles/' },
    { title: 2, link: '/articles/2' },
    { title: 3, link: '/articles/3' },
  ]);

  // No links when only 1 page
  const onePage = pagination({ last_page: 1 }, '/articles/');
  expect(onePage).toEqual([]);
});
