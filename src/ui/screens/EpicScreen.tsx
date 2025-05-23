import React from 'react';
import { ScrollView, Text, StyleSheet, View, Platform } from 'react-native';
import { useEpicViewModel } from '../../presentation/viewmodels/useEpicViewModel';
import SolarImageCard from '../components/SolarImageCard';
import RotatingPlanet from '../components/RotatingPlanet';
import { useTheme } from '../../state/context/ThemeContext';

const EpicScreen = () => {
  const { imageData, loading, error } = useEpicViewModel();
  const { theme, textColor } = useTheme();
  const isDark = theme === 'dark';
  const isWeb = Platform.OS === 'web';

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <RotatingPlanet />
        <Text style={{ color: textColor, marginTop: 16 }}>Cargando imágenes solares...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <Text style={{ color: textColor }}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        { backgroundColor: isDark ? '#0f172a' : '#f0f0f0', padding: 16 },
        isWeb && styles.webCenter,  // aplicamos centrado solo en web
      ]}
      style={{ backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }}
    >
      {imageData && (
        <SolarImageCard imageUrl={imageData.url} caption={imageData.caption} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EpicScreen;
