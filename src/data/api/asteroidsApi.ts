import axios from 'axios'; //Importamos axios

const asteroidsApiUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'; //URL de la api

export const fetchAsteroids = async () => {
  try {
    const response = await axios.get(asteroidsApiUrl); //Hacemos la peticion a la api
    return response.data.near_earth_objects;// //Devolvemos los asteroides
  } catch (error) {
    throw new Error('Error fetching asteroids data'); //Manejo de errores
  }
};
