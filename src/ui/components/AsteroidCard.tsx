import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface AsteroidCardProps {
  asteroid: any;
}

const AsteroidCard: React.FC<AsteroidCardProps> = ({ asteroid }) => {
  // Puedes usar una imagen genérica para los asteroides.
  const asteroidImage = 'https://via.placeholder.com/150?text=Asteroid'; // Imagen placeholder

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{asteroid.name}</Text>
      <Text style={styles.diameter}>
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
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
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
