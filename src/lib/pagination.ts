export default (lastPage, link) => {
  const pagination: ({ title: number, link: string })[] = [];
  const upTo = parseInt(lastPage, 10);

  if (upTo > 1) {
    for (let p = 1; p <= upTo; p++) { // eslint-disable-line
      if (p === 1) {
        pagination.push({ title: p, link });
      } else {
        pagination.push({ title: p, link: `${link}${p}` });
      }
    }
  }

  return pagination;
};
