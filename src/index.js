import axios from 'axios';

export const fetchData = async () => {
  const { data } = await axios.get(
    'https://staging-apiv2.sl.nsw.gov.au/collection/v1/items/n7oVw8Zn/hierarchy-children'
  );

  return data;
};

// export default start;
