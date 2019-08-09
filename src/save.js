import fs from 'fs';

import scrape from './scraper';

const save = async id => {
  const file = await scrape(id);

  fs.writeFileSync('./test.json', JSON.stringify(file));
};

save('n7oVw8Zn');
