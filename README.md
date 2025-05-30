# segundo_parcial
# 🚀 NASA Explorer App

Aplicación móvil y web desarrollada con React Native + Expo, que permite explorar contenido de las APIs públicas de la NASA, incluyendo imágenes astronómicas del día (APOD), fotos del Mars Rover, imágenes solares de EPIC, búsqueda personalizada de imágenes y más.

## 🧠 Arquitectura

La app está estructurada bajo los principios de **Clean Architecture** y **MVVM (Model-View-ViewModel)**, incorporando buenas prácticas como **SOLID**, **DRY**, **KISS** y patrones como Strategy, Factory y SingleTon.

📦src
├── data # Implementación concreta: llamadas a API, modelos y datasources
│ ├── api # Clientes HTTP
│ ├── datasources # Datasources remotas/locales
│ ├── models # Modelos de datos (DTOs)
│ └── repositories # Repositorios concretos
├── domain # Lógica de negocio pura
│ ├── entities # Entidades del dominio
│ ├── repositories # Interfaces de repositorio
│ └── usecases # Casos de uso
├── presentation
│ └── viewmodels # Lógica de presentación y bindings con UI
├── services # Servicios auxiliares
├── state
│ ├── context # ThemeContext global (claro/oscuro)
│ └── slices # Redux slices para otras partes del estado
├── strategies # Implementaciones de patrones Strategy para búsqueda NASA
└── ui
├── components # Componentes visuales reutilizables
└── screens # Pantallas de la aplicación

## 🌌 Funcionalidades

- 🔭 **APOD (Astronomy Picture of the Day)**  
  Visualiza la imagen astronómica destacada del día junto con su descripción.

- 🚗 **Mars Rover Photos**  
  Consulta imágenes capturadas por los rovers en Marte.

- 🌍 **EPIC (Earth Polychromatic Imaging Camera)**  
  Muestra imágenes de la Tierra con posibilidad de ajustar el tema claro/oscuro automáticamente según día o noche.

- 🔎 **Búsqueda personalizada**  
  Busca imágenes espaciales con filtros personalizados utilizando Formik y patrón Strategy.

- ☄️ **Near-Earth Asteroids**  
  Visualiza datos de asteroides cercanos a la Tierra.

- 🌗 **Modo Claro/Oscuro**  
  Activado dinámicamente según contexto global o por horario diurno/nocturno (en EPIC).

## 🔐 Variables de entorno

Para usar las APIs públicas de la NASA, necesitas una API Key.  
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

env =
NASA_API_KEY=DEMO_KEY

## 📱 Tecnologías

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Formik](https://formik.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Axios](https://axios-http.com/)
- [NASA Open APIs](https://api.nasa.gov/)

## ⚙️ Instalación

# Clona el repositorio
git clone https://github.com/WebiWaboK/segundo_parcial.git
cd segundo_parcial

# Instala dependencias
npm install

# Corre el proyecto
npx expo start

# Y listo, a disfrutar de la app 😀