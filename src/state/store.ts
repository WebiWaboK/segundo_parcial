// src/state/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // para React Native
// import storage from 'redux-persist/lib/storage'; // para web fallback, redux-persist lo detecta

import themeReducer from './slices/themeSlice'; // ejemplo
// importa otros reducers

const rootReducer = combineReducers({
  theme: themeReducer,
  // otros reducers aquí
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'], // solo lo que quieres persistir
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // para redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
