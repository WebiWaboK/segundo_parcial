import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useAsteroidsViewModel } from '../../presentation/viewmodels/useAsteroidsViewModel';
import AsteroidCard from '../components/AsteroidCard';
import RotatingPlanet from '../components/RotatingPlanet';

const AsteroidsScreen = () => {
  const { asteroids, loading, error } = useAsteroidsViewModel();

  if (loading) {
    return (
      <View style={styles.centered}>
        <RotatingPlanet />
        <Text style={styles.loadingText}>Cargando asteroides...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={styles.container}>
      {asteroids.map((asteroid, index) => (
        <AsteroidCard key={index} asteroid={asteroid} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
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

export default AsteroidsScreen;
