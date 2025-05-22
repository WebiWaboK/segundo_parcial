import { View, Text, Image, StyleSheet } from 'react-native';
import { Apod } from '../../domain/entities/Apod';
import { useTheme } from '../../state/context/ThemeContext';

interface Props {
  data: Apod;
}

export default function ApodCard({ data }: Props) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const textColor = { color: isDark ? '#fff' : '#000' };

  return (
    <View style={[styles.card]}>
      <Text style={[styles.title, textColor]}>{data.title}</Text>
      <Image source={{ uri: data.url }} style={styles.image} />
      <Text style={[styles.date, textColor]}>{data.date}</Text>
      <Text style={[styles.explanation, textColor]}>{data.explanation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    height: 200,
    borderRadius: 8,
    marginVertical: 12,
  },
  date: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
  explanation: {
    fontSize: 14,
  },
});
