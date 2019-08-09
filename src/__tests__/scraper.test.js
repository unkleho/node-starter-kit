import scrape from '../scraper';

jest.setTimeout(30000);

it('should return data', async () => {
  const result = await scrape('n7oVw8Zn');

  expect(result.title).toEqual(
    'May Gibbs papers, relics and pictorial material, 1900-1969'
  );
  expect(result.children.length).toEqual(9);
  expect(result.children[0]).toMatchObject({
    title: 'Series 01: Literary manuscripts, 1901-1967',
  });

  expect(result.children[0].children.length).toEqual(5);
  expect(result.children[0].children[0].title).toEqual(
    'Series 01 Sub-Series 01: Published works, 1916-1953'
  );
});
