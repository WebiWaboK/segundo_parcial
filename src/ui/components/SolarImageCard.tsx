import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../../state/context/ThemeContext';

interface Props {
  imageUrl: string;
  caption: string;
}

const SolarImageCard = ({ imageUrl, caption }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#fff' }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <Text style={[styles.caption, { color: isDark ? '#fff' : '#000' }]}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
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
