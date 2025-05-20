import { View, Text, StyleSheet } from 'react-native';
import { useApodViewModel } from '../../presentation/viewmodels/useApodViewModel';
import ApodCard from '../components/ApodCard';
import RotatingPlanet from '../components/RotatingPlanet';

export default function ApodScreen() {
  const { apod, loading, error } = useApodViewModel();

  if (loading) {
    return (
      <View style={styles.centered}>
        <RotatingPlanet />
        <Text style={styles.loadingText}>Cargando contenido astronómico...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;
  if (!apod) return <Text>No hay datos</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ApodCard data={apod} />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  loadingText: {
    color: '#fff',
    marginTop: 16,
  },
});
