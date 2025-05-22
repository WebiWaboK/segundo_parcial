import axios from 'axios' //Importamos axios

export const apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary', //
  params: {
    api_key: 'DEMO_KEY', //Api key del .env
  },
});

//Aqui usamos singleton para que no se creen instancias de la api