import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';
import { useTheme } from '../../state/context/ThemeContext';

interface Props {
  photo: MarsPhoto;
}

const MarsPhotoCard = ({ photo }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#fff' }]}>
      <Image
        source={{ uri: photo.img_src }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        {photo.rover_name} - {photo.camera_name}
      </Text>
      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        Fecha: {photo.earth_date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  text: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default MarsPhotoCard;
