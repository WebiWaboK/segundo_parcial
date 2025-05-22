import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../../state/context/ThemeContext';

interface AsteroidCardProps {
  asteroid: any;
}

const AsteroidCard: React.FC<AsteroidCardProps> = ({ asteroid }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const asteroidImage = 'https://via.placeholder.com/150?text=Asteroid';

  const backgroundColor = isDark ? '#1e293b' : '#fff';
  const textColor = { color: isDark ? '#fff' : '#000' };

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.name, textColor]}>{asteroid.name}</Text>
      <Text style={[styles.diameter, textColor]}>
        Max Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km
      </Text>
      <Image source={{ uri: asteroidImage }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  diameter: {
    fontSize: 16,
    marginVertical: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 12,
    borderRadius: 8,
  },
});

export default AsteroidCard;
