import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menú" }} />
      <Stack.Screen name="products" options={{ title: "Catálogo" }} />
      <Stack.Screen name="math-trapecio" options={{ title: "Costo por día" }} />
      <Stack.Screen name="math-total" options={{ title: "Costo total del alquiler" }} />
    </Stack>
  );
}