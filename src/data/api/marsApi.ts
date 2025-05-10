import axios from 'axios';

const API_KEY = 'DEMO_KEY'; // Usa tu API key aquí
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

export const fetchMarsPhotos = async (date: string) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000); // 20 segundos

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        earth_date: date,
        api_key: API_KEY,
      },
      signal: controller.signal,
    });
    return response.data.photos;
  } catch (error: any) {
    if (axios.isCancel(error)) {
      throw new Error('Tiempo de espera agotado');
    }
    throw new Error('Error al obtener las fotos de Marte');
  } finally {
    clearTimeout(timeout);
  }
};
