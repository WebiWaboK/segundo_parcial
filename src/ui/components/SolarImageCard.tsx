import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

interface SolarImageCardProps {
  imageUrl: string;
  caption: string;
}

const SolarImageCard: React.FC<SolarImageCardProps> = ({ imageUrl, caption }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SolarImageCard;
