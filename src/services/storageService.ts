import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageService = {
  async save(key: string, data: any) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  },

  async load(key: string) {
    const json = await AsyncStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  },
};
