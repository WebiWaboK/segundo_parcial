import axios from 'axios'; //Importamos axios

const API_KEY = 'DEMO_KEY';
const BASE_URL = `https://api.nasa.gov/DONKI/notifications`;//URL de la api

export const fetchSpaceAlerts = async () => {
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  return response.data;
};
