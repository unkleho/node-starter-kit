import scrape from '../scraper';

it('should return data', async () => {
  const results = await scrape('n7oVw8Zn');

  expect(results.length).toEqual(9);
  expect(results[0]).toMatchObject({
    title: 'Series 01: Literary manuscripts, 1901-1967',
  });
  expect(results[0].children.length).toEqual(5);
  expect(results[1].children.length).toEqual(3);
});
