import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { useEpicViewModel } from '../../presentation/viewmodels/useEpicViewModel';
import SolarImageCard from '../components/SolarImageCard';

const EpicScreen = () => {
  const { imageData, loading, error } = useEpicViewModel();

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
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
});

export default EpicScreen;
