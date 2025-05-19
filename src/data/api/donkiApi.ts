import axios from 'axios';

const API_KEY = 'DEMO_KEY'; // reemplaza si tienes uno propio
const BASE_URL = `https://api.nasa.gov/DONKI/notifications`;

export const fetchSpaceAlerts = async () => {
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  return response.data;
};
