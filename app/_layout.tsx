import { Stack } from "expo-router";


export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title:"Inicio" }} />
            <Stack.Screen name="apod" options={{ title:"Foto del dia" }} />
            <Stack.Screen name="gallery" options={{ title:"Fotos de Marte" }} />
            <Stack.Screen name="epic" options={{ title:"Foto de la Tierra" }} />
            <Stack.Screen name="asteroid" options={{ title:"Asteroides" }} />
        </Stack>
    );
}