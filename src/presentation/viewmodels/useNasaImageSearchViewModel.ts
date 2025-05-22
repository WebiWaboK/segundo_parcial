import { useState } from 'react';
import { NasaImage } from '../../domain/entities/NasaImage';
import { SearchImagesUseCase } from '../../domain/usecases/SearchImagesUseCase';
import { NasaImageDataSourceImpl } from '../../data/datasources/NasaImageDataSourceImpl';

export const useNasaImageSearchViewModel = () => {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchImagesUseCase = new SearchImagesUseCase(new NasaImageDataSourceImpl());

  const search = async (query: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchImagesUseCase.execute(query);
      setImages(data);
    } catch (err) {
      setError('Error al buscar imágenes');
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, error, search };
};
