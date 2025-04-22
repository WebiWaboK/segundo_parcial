import { View, ActivityIndicator, Text } from 'react-native';
import { useApodViewModel } from '../../presentation/viewmodels/useApodViewModel';
import ApodCard from '../components/ApodCard';

export default function ApodScreen() {
  const { apod, loading, error } = useApodViewModel();

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;
  if (error) return <Text>{error}</Text>;
  if (!apod) return <Text>No hay datos</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ApodCard data={apod} />
    </View>
  );
}
