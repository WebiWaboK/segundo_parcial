import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '../../state/context/ThemeContext';

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = themedStyles(theme);

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

      <Link href="/asteroid" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>📡 Asteroides que están en la Tierra</Text>
        </Pressable>
      </Link>

      <Link href="/donki" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>🚨 Alertas Espaciales</Text>
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

const themedStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      paddingTop: 60,
      paddingBottom: 30,
      paddingHorizontal: 20,
      backgroundColor: theme === 'dark' ? '#000' : '#fff',
      flexGrow: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#fff' : '#000',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: theme === 'dark' ? '#aaa' : '#444',
      marginBottom: 30,
      textAlign: 'center',
    },
    button: {
      backgroundColor: theme === 'dark' ? '#1e1e1e' : '#ddd',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginVertical: 10,
      width: '100%',
      borderColor: theme === 'dark' ? '#fff' : '#000',
      borderWidth: 1,
    },
    buttonText: {
      color: theme === 'dark' ? '#fff' : '#000',
      fontSize: 16,
      textAlign: 'center',
    },
  });
