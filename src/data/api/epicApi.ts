import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/EPIC/api/natural';
const API_KEY = 'DEMO_KEY'; // Reemplaza si tienes tu clave

export const fetchEpicData = async () => {
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  return response.data;
};
