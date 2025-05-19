import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useEpicViewModel } from '../../presentation/viewmodels/useEpicViewModel';
import SolarImageCard from '../components/SolarImageCard';

const EpicScreen = () => {
  const { imageData, loading, error } = useEpicViewModel();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!imageData) {
    return <Text>No image available</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <SolarImageCard imageUrl={imageData.url} caption={imageData.caption} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default EpicScreen;
