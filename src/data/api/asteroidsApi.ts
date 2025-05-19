import axios from 'axios';

const asteroidsApiUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';

export const fetchAsteroids = async () => {
  try {
    const response = await axios.get(asteroidsApiUrl);
    return response.data.near_earth_objects;
  } catch (error) {
    throw new Error('Error fetching asteroids data');
  }
};
