import { useEffect, useState } from 'react';
import { GetEpicImageUseCase } from '../../domain/usecases/GetEpicImageUseCase';
import { EpicRepositoryImpl } from '../../data/repositories/EpicRepositoryImpl';
import { EpicImage } from '../../domain/entities/EpicImage';

export const useEpicViewModel = () => {
  const [imageData, setImageData] = useState<EpicImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const useCase = new GetEpicImageUseCase(new EpicRepositoryImpl());

  const fetchImage = async () => {
    setLoading(true);
    try {
      const data = await useCase.execute();
      setImageData(data);
    } catch (err) {
      setError('No se pudo obtener la imagen EPIC');
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
