import React from 'react';
import { ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useAsteroidsViewModel } from '../../presentation/viewmodels/useAsteroidsViewModel';
import AsteroidCard from '../components/AsteroidCard';

const AsteroidsScreen = () => {
  const { asteroids, loading, error } = useAsteroidsViewModel();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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
});

export default AsteroidsScreen;
