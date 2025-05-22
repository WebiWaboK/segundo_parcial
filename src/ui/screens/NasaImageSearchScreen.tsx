import React from 'react';
import { View, Text, Image, TextInput, Button, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useNasaImageSearchViewModel } from '../../presentation/viewmodels/useNasaImageSearchViewModel';
import { useTheme } from '../../state/context/ThemeContext';

const NasaImageSearchScreen = () => {
  const { images, loading, error, search } = useNasaImageSearchViewModel();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Buscar Imágenes NASA</Text>

      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values) => search(values.query)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder="Ej. Mars, Earth, Galaxy"
              placeholderTextColor={isDark ? '#aaa' : '#555'}
              onChangeText={handleChange('query')}
              onBlur={handleBlur('query')}
              value={values.query}
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? '#1c1c1c' : '#f0f0f0',
                  color: isDark ? '#fff' : '#000',
                  borderColor: isDark ? '#555' : '#ccc',
                },
              ]}
            />
            <Button onPress={handleSubmit as any} title="Buscar" color={isDark ? '#1e90ff' : undefined} />
          </View>
        )}
      </Formik>

      {loading && (
        <ActivityIndicator
          size="large"
          color={isDark ? '#1e90ff' : '#0000ff'}
          style={{ marginTop: 10 }}
        />
      )}

      {error !== '' && <Text style={[styles.error, { color: 'red' }]}>{error}</Text>}

      {images.map((img, idx) => (
        <View key={idx} style={styles.imageContainer}>
          <Image source={{ uri: img.imageUrl }} style={styles.image} resizeMode="cover" />
          <Text style={[styles.imageTitle, { color: isDark ? '#fff' : '#000' }]}>{img.title}</Text>
          <Text style={{ color: isDark ? '#ccc' : '#333' }}>{img.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
  },
  imageContainer: {
    marginVertical: 15,
  },
  image: {
    height: 200,
    borderRadius: 8,
  },
  imageTitle: {
    fontWeight: 'bold',
    marginTop: 6,
  },
});

export default NasaImageSearchScreen;
