import { useState, useEffect } from 'react';
import { GetEpicImageUseCase } from '../../domain/usecases/GetEpicImageUseCase';
import { EpicRepositoryImpl } from '../../data/repositories/EpicRepositoryImpl';

export const useEpicViewModel = () => {
  const [imageData, setImageData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getEpicImageUseCase = new GetEpicImageUseCase(new EpicRepositoryImpl());

  const fetchImage = async () => {
    setLoading(true);
    try {
      const data = await getEpicImageUseCase.execute();
      setImageData(data); // Guarda los datos de la imagen.
    } catch (err) {
      setError('Error fetching image');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return {
    imageData,
    loading,
    error,
  };
};
