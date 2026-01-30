import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from "../src/components/MenuButton";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RentCar Express</Text>
      <Text style={styles.subtitle}>Cálculos y catálogo rápido</Text>

      <View style={{ gap: 12, marginTop: 14 }}>
        <MenuButton
          title="1) Catálogo (API + fotos)"
          onPress={() => router.push("/products")}
        />

        <MenuButton
          title="2) Costo por días"
          onPress={() => router.push("/math-trapecio")}
        />

        <MenuButton
          title="3) Costo total del alquiler"
          onPress={() => router.push("/math-total")}
        />
      </View>

      <Text style={styles.note}>
        Tip: Cada pantalla practica estado, inputs y cálculos simples.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
  title: { fontSize: 24, fontWeight: "900" },
  subtitle: { marginTop: 4, color: "#555", fontWeight: "700" },
  note: { marginTop: 18, color: "#1976d2", fontWeight: "800" },
});
