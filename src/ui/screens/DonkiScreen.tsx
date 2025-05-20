import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useDonkiViewModel } from '../../presentation/viewmodels/useDonkiViewModel';
import SpaceAlertCard from '../components/SpaceAlertCard';
import RotatingPlanet from '../components/RotatingPlanet';

const DonkiScreen = () => {
  const { alerts, loading, error } = useDonkiViewModel();

  if (loading) {
    return (
      <View style={styles.centered}>
        <RotatingPlanet />
        <Text style={styles.loadingText}>Cargando alertas espaciales...</Text>
      </View>
    );
  }

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

export default DonkiScreen;
