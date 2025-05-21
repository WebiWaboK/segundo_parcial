import { Stack } from "expo-router";
import { ThemeProvider } from '../src/state/context/ThemeContext';


export default function Layout() {
    return (
        <ThemeProvider>
                <Stack>
                <Stack.Screen name="index" options={{ title:"Inicio" }} />
                <Stack.Screen name="apod" options={{ title:"Foto del dia" }} />
                <Stack.Screen name="gallery" options={{ title:"Fotos de Marte" }} />
                <Stack.Screen name="epic" options={{ title:"Foto de la Tierra" }} />
                <Stack.Screen name="asteroid" options={{ title:"Asteroides" }} />
                <Stack.Screen name="donki" options={{ title:"Alertas Espaciales" }} />
                <Stack.Screen name="settings" options={{ title:"Configuración" }} />
            </Stack>
        </ThemeProvider>
    );
}