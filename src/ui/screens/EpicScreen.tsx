import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useEpicViewModel } from '../../presentation/viewmodels/useEpicViewModel';
import SolarImageCard from '../components/SolarImageCard';
import RotatingPlanet from '../components/RotatingPlanet';

const EpicScreen = () => {
  const { imageData, loading, error } = useEpicViewModel();

  if (loading) {
    return (
      <View style={styles.centered}>
        <RotatingPlanet />
        <Text style={styles.loadingText}>Cargando imágenes solares...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={styles.container}>
      {imageData && (
        <SolarImageCard imageUrl={imageData.url} caption={imageData.caption} />
      )}
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

export default EpicScreen;
