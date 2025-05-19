import axios from 'axios';

const proxyUrl = 'https://api.allorigins.win/get?url=';
const epicApiUrl = 'https://epic.gsfc.nasa.gov/api/natural/earth/0.jpg?api_key=DEMO_KEY';

export const fetchSolarImage = async () => {
  try {
    const response = await axios.get(`${proxyUrl}${encodeURIComponent(epicApiUrl)}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching solar image from EPIC API');
  }
};
