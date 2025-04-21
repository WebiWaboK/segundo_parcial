import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🚀 NASA Explorer</Text>
      <Text style={styles.subtitle}>
        Explora el universo con las APIs públicas de la NASA
      </Text>

      <Link href="/apod" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>📸 Astronomy Picture of the Day</Text>
        </Pressable>
      </Link>

      <Link href="/gallery" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>🚗 Mars Rover Photos</Text>
        </Pressable>
      </Link>

      <Link href="/epic" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>🌞 EPIC (Cámara Solar)</Text>
        </Pressable>
      </Link>

      <Link href="/settings" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>⚙️ Configuración</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});
