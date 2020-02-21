/**
 * Sort through the mass amounts of data in
 * an endpoint and return the featured image URL
 */
// eslint-disable-next-line
export const getFeaturedImageUrl = (item) => (
  (item._embedded
      && item._embedded['wp:featuredmedia']
      && item._embedded['wp:featuredmedia']['0']
      && item._embedded['wp:featuredmedia']['0'].media_details
      && item._embedded['wp:featuredmedia']['0'].media_details.sizes
      && item._embedded['wp:featuredmedia']['0'].media_details.sizes.full
      && item._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url)
    || null
);
