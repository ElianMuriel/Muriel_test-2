import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menú" }} />
      <Stack.Screen name="products" options={{ title: "Products" }} />
      <Stack.Screen name="math-trapecio" options={{ title: "Math 1" }} />
      <Stack.Screen name="math-total" options={{ title: "Math 2" }} />
    </Stack>
  );
}