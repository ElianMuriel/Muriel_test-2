import { useMemo, useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import MenuButton from "../src/components/MenuButton";

export default function TotalCostScreen() {
  const [costDays, setCostDays] = useState("");
  const [km, setKm] = useState("");
  const [frequent, setFrequent] = useState(false);

  const subtotal = useMemo(() => {
    const c = Number(costDays);
    const k = Number(km) * 0.25;
    return c + k;
  }, [costDays, km]);

  const discount = frequent ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Costo total</Text>

      <TextInput
        style={styles.input}
        placeholder="Costo por días"
        keyboardType="numeric"
        value={costDays}
        onChangeText={setCostDays}
      />

      <TextInput
        style={styles.input}
        placeholder="Kilómetros recorridos"
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />

      <View style={styles.row}>
        <Text>Cliente frecuente (-10%)</Text>
        <Switch value={frequent} onValueChange={setFrequent} />
      </View>

      <MenuButton title="Calcular total" onPress={() => {}} />

      <Text style={styles.result}>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text style={styles.result}>Descuento: ${discount.toFixed(2)}</Text>
      <Text style={styles.total}>Total final: ${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
  title: { fontSize: 22, fontWeight: "900", marginBottom: 10 },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  result: { fontWeight: "700", marginTop: 6 },
  total: { fontWeight: "900", marginTop: 8, color: "#1976d2" },
});
