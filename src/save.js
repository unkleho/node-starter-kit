import fs from 'fs';

import scrape from './scraper';

const save = async (id) => {
  const file = await scrape(id);

  fs.writeFileSync('./test.json', JSON.stringify(file));
};

// May Gibbs
// n7oVw8Zn

// Tal Dai-ichi
// YK5QWJjn

save('YK5QWJjn');
