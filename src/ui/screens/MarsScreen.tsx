import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useMarsViewModel } from '../../presentation/viewmodels/useMarsViewModel';
import MarsPhotoCard from '../components/MarsPhotoCard';
import RotatingPlanet from '../components/RotatingPlanet';
import { useTheme } from '../../state/context/ThemeContext';

const MarsScreen = () => {
  const { photos, loading, error } = useMarsViewModel('2020-07-13');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (loading) {
    return (
      <View style={[styles.loaderContainer, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <RotatingPlanet />
        <Text style={{ color: isDark ? '#fff' : '#000', marginTop: 16, fontSize: 16 }}>Cargando fotos de Marte...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={{ backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }}>
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
  },
});

export default MarsScreen;
