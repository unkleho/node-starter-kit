import { fetchData } from '../index.js';

it('should start', () => {
  expect(fetchData()).toEqual({ title: 'test' });
});
