import { getFeaturedImageUrl } from '../../lib/images';

it('lib/string: getFeaturedImageUrl returns correctly', () => {
  expect(getFeaturedImageUrl({
    _embedded: {
      'wp:featuredmedia': [{
        media_details: {
          sizes: {
            full: {
              source_url: 'https://www.digitalsupply.co/wp-content/uploads/2018/03/glacier-blue.jpg',
            },
          },
        },
      }],
    },
  })).toEqual('https://www.digitalsupply.co/wp-content/uploads/2018/03/glacier-blue.jpg');
});
