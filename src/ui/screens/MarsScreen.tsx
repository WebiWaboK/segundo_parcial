import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useMarsViewModel } from '../../presentation/viewmodels/useMarsViewModel';
import MarsPhotoCard from '../components/MarsPhotoCard';

const MarsScreen = () => {
  const { photos, loading, error } = useMarsViewModel('2020-07-13'); // Cambia la fecha si deseas

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView>
      {photos.map(photo => (
        <MarsPhotoCard key={photo.id} photo={photo} />
      ))}
    </ScrollView>
  );
};

export default MarsScreen;
