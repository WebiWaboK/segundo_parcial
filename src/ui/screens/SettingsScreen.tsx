import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../../state/context/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
        Tema actual: {theme === 'dark' ? 'Oscuro' : 'Claro'}
      </Text>
      <Button title="Cambiar tema" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
