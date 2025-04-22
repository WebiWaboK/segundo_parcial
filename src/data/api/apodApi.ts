import axios from 'axios';

export const apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  params: {
    api_key: 'DEMO_KEY',
  },
});
