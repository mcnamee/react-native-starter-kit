import { ucfirst, truncate } from '../../lib/string';

it('lib/string: ucfirst returns correctly', () => {
  const lcWord = ucfirst('hello');
  expect(lcWord).toEqual('Hello');

  const upWord = ucfirst('Hello');
  expect(upWord).toEqual('Hello');

  const lcWords = ucfirst('hello world');
  expect(lcWords).toEqual('Hello world');

  const upWords = ucfirst('Hello world');
  expect(upWords).toEqual('Hello world');

  const numbers = ucfirst('1234 world');
  expect(numbers).toEqual('1234 world');
});

it('lib/string: truncate returns correctly', () => {
  const lcWord = truncate('hello world this is', 2);
  expect(lcWord).toEqual('hello world…');

  const upWord = truncate('Hello', 3);
  expect(upWord).toEqual('Hello');

  const lcWords = truncate('hello world world this is a big', undefined);
  expect(lcWords).toEqual('hello world world this is a big');
});
