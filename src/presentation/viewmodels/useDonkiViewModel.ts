import { useEffect, useState } from 'react';
import { GetSpaceAlertsUseCase } from '../../domain/usecases/GetSpaceAlertsUseCase';
import { DonkiRepositoryImpl } from '../../data/repositories/DonkiRepositoryImpl';
import { SpaceAlert } from '../../domain/entities/SpaceAlert';

export const useDonkiViewModel = () => {
  const [alerts, setAlerts] = useState<SpaceAlert[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAlertsUseCase = new GetSpaceAlertsUseCase(new DonkiRepositoryImpl());

  const loadAlerts = async () => {
    setLoading(true);
    try {
      const data = await getAlertsUseCase.execute();
      setAlerts(data);
    } catch (err) {
      setError('Error loading alerts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  return {
    alerts,
    loading,
    error,
  };
};
