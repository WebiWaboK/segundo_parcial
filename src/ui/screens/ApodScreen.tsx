import { View, Text, StyleSheet } from 'react-native';
import { useApodViewModel } from '../../presentation/viewmodels/useApodViewModel';
import ApodCard from '../components/ApodCard';
import RotatingPlanet from '../components/RotatingPlanet';
import { useTheme } from '../../state/context/ThemeContext';

export default function ApodScreen() {
  const { apod, loading, error } = useApodViewModel();
  const { theme, textColor } = useTheme();

  const isDark = theme === 'dark';

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <RotatingPlanet />
        <Text style={{ color: textColor, marginTop: 16 }}>Cargando contenido astronómico...</Text>
      </View>
    );
  }

  if (error)
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <Text style={{ color: textColor }}>{error}</Text>
      </View>
    );

  if (!apod)
    return (
      <View style={[styles.centered, { backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }]}>
        <Text style={{ color: textColor }}>No hay datos</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: isDark ? '#0f172a' : '#f0f0f0' }}>
      <ApodCard data={apod} />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
