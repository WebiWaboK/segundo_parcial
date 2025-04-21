import { Stack } from "expo-router";


export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(index)" options={{ title:"Inicio" }} />
            <Stack.Screen name="(configuration)" options={{ title:"Configuración" }} />
        </Stack>
    );
}