import { useState, useEffect } from 'react';
import { GetAsteroidsUseCase } from '../../domain/usecases/GetAsteroidsUseCase';
import { AsteroidsRepositoryImpl } from '../../data/repositories/AsteroidsRepositoryImpl';

export const useAsteroidsViewModel = () => {
  const [asteroids, setAsteroids] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getAsteroidsUseCase = new GetAsteroidsUseCase(new AsteroidsRepositoryImpl());

  const fetchAsteroids = async () => {
    setLoading(true);
    try {
      const data = await getAsteroidsUseCase.execute();
      setAsteroids(data);
    } catch (err) {
      setError('Error fetching asteroids data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsteroids();
  }, []);

  return {
    asteroids,
    loading,
    error,
  };
};
