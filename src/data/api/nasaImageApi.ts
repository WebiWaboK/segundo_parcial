import axios from 'axios';

export const nasaImageApi = axios.create({
  baseURL: 'https://images-api.nasa.gov',
});
