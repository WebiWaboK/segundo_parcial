import { useState, useEffect } from 'react';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';
import { GetMarsPhotosUseCase } from '../../domain/usecases/GetMarsPhotosUseCase';
import { MarsRepositoryImpl } from '../../data/repositories/MarsRepositoryImpl';

export const useMarsViewModel = (date: string) => {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    setLoading(true);
    const useCase = new GetMarsPhotosUseCase(new MarsRepositoryImpl());

    try {
      const data = await useCase.execute(date);
      setPhotos(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [date]);

  return { photos, loading, error };
};
