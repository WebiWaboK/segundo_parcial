import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useAsteroidsViewModel } from '../../presentation/viewmodels/useAsteroidsViewModel';
import AsteroidCard from '../components/AsteroidCard';
import RotatingPlanet from '../components/RotatingPlanet';
import { useTheme } from '../../state/context/ThemeContext';

const AsteroidsScreen = () => {
  const { asteroids, loading, error } = useAsteroidsViewModel();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <RotatingPlanet />
        <Text style={{ color: isDark ? '#fff' : '#000', marginTop: 16 }}>Cargando asteroides...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={{ backgroundColor: isDark ? '#0f172a' : '#f0f0f0', padding: 16 }}>
      {asteroids.map((asteroid, index) => (
        <AsteroidCard key={index} asteroid={asteroid} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AsteroidsScreen;
