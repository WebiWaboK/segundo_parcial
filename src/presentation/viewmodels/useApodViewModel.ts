import { useEffect, useState } from 'react';
import { GetApodUseCase } from '../../domain/usecases/GetApodUseCase';
import { ApodRepositoryImpl } from '../../data/repositories/ApodRepositoryImpl';
import { Apod } from '../../domain/entities/Apod';

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Tiempo de espera agotado'));
    }, timeoutMs);

    promise
      .then(result => {
        clearTimeout(timeout);
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timeout);
        reject(error);
      });
  });
}

export function useApodViewModel() {
  const [apod, setApod] = useState<Apod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const usecase = new GetApodUseCase(new ApodRepositoryImpl());

    withTimeout(usecase.execute(), 20000) // 20 segundos
      .then(setApod)
      .catch((err) => {
        if (err.message === 'Tiempo de espera agotado') {
          setError('Tiempo de espera agotado. Intenta de nuevo.');
        } else {
          setError('No se pudo cargar la imagen.');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { apod, loading, error };
}
