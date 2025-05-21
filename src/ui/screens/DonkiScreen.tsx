import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useDonkiViewModel } from '../../presentation/viewmodels/useDonkiViewModel';
import SpaceAlertCard from '../components/SpaceAlertCard';
import RotatingPlanet from '../components/RotatingPlanet';
import { useTheme } from '../../state/context/ThemeContext';

const DonkiScreen = () => {
  const { alerts, loading, error } = useDonkiViewModel();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <RotatingPlanet />
        <Text style={{ color: isDark ? '#fff' : '#000', marginTop: 16 }}>Cargando alertas espaciales...</Text>
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={{ backgroundColor: isDark ? '#0f172a' : '#f0f0f0', padding: 16 }}>
      {alerts.map((alert, index) => (
        <SpaceAlertCard key={index} alert={alert} />
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

export default DonkiScreen;
