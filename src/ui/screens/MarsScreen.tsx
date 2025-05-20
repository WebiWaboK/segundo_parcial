import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useMarsViewModel } from '../../presentation/viewmodels/useMarsViewModel';
import MarsPhotoCard from '../components/MarsPhotoCard';
import RotatingPlanet from '../components/RotatingPlanet'; // ← importamos aquí

const MarsScreen = () => {
  const { photos, loading, error } = useMarsViewModel('2020-07-13');

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <RotatingPlanet />
        <Text style={styles.loadingText}>Cargando fotos de Marte...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView>
      {photos.map(photo => (
        <MarsPhotoCard key={photo.id} photo={photo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#0f172a',
  },
  loadingText: {
    marginTop: 16,
    color: '#fff',
    fontSize: 16,
  },
});

export default MarsScreen;
