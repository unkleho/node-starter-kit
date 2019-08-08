import axios from 'axios';

const fetch = axios.create({
  baseURL: 'https://staging-apiv2.sl.nsw.gov.au',
  headers: {
    'x-api-key': '4GiyqFNOt7ZdMZCubAdC5WVq9zGeaT8P',
    // refreshcache: 1,
  },
});

export default fetch;
