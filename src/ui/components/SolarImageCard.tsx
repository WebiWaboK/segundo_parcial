import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

interface Props {
  imageUrl: string;
  caption: string;
}

const SolarImageCard = ({ imageUrl, caption }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
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
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    padding: 8,
    textAlign: 'center',
  },
});

export default SolarImageCard;
