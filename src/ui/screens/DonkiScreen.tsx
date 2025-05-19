import React from 'react';
import { ScrollView, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useDonkiViewModel } from '../../presentation/viewmodels/useDonkiViewModel';
import SpaceAlertCard from '../components/SpaceAlertCard';

const DonkiScreen = () => {
  const { alerts, loading, error } = useDonkiViewModel();

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={styles.container}>
      {alerts.map((alert, index) => (
        <SpaceAlertCard key={index} alert={alert} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default DonkiScreen;
