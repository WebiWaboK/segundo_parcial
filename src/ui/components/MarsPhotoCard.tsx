import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

interface Props {
  photo: MarsPhoto;
}

const MarsPhotoCard = ({ photo }: Props) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photo.img_src }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>{photo.rover_name} - {photo.camera_name}</Text>
      <Text style={styles.text}>Fecha: {photo.earth_date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    elevation: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1, // ← Esto hace que sea cuadrada
  },
  text: {
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default MarsPhotoCard;
