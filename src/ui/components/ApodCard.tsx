import { View, Text, Image, StyleSheet } from 'react-native';
import { Apod } from '../../domain/entities/Apod';

interface Props {
  data: Apod;
}

export default function ApodCard({ data }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.title}</Text>
      <Image source={{ uri: data.url }} style={styles.image} />
      <Text style={styles.date}>{data.date}</Text>
      <Text style={styles.explanation}>{data.explanation}</Text>
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
