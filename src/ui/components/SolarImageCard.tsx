import React from 'react';
import { Image, Text, View, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../../state/context/ThemeContext';

interface Props {
  imageUrl: string;
  caption: string;
}

const SolarImageCard = ({ imageUrl, caption }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isWeb = Platform.OS === 'web';

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? '#1e293b' : '#fff',
          height: isWeb ? 700 : 'auto',
          width: isWeb ? 600 : '100%',
        },
      ]}
    >
      <Image source={{ uri: imageUrl }} style={[styles.image, { height: isWeb ? 650 : 500 }]} resizeMode="cover" />
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
