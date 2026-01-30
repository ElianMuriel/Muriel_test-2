import { Picker } from "@react-native-picker/picker";
import { useMemo, useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import MenuButton from "../src/components/MenuButton";

export default function CostByDaysScreen() {
  const [type, setType] = useState("Economico");
  const [days, setDays] = useState("");
  const [insurance, setInsurance] = useState(false);

  const rate = { Economico: 30, SUV: 50, Camioneta: 70 }[type];
  const d = Number(days);

  const subtotal = useMemo(() => (d > 0 ? d * rate : 0), [d, rate]);
  const seguro = useMemo(() => (insurance ? d * 8 : 0), [insurance, d]);
  const total = subtotal + seguro;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Costo por días</Text>

      <Picker selectedValue={type} onValueChange={setType}>
        <Picker.Item label="Económico" value="Economico" />
        <Picker.Item label="SUV" value="SUV" />
        <Picker.Item label="Camioneta" value="Camioneta" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Número de días"
        keyboardType="numeric"
        value={days}
        onChangeText={setDays}
      />

      <View style={styles.row}>
        <Text>Seguro diario (+$8)</Text>
        <Switch value={insurance} onValueChange={setInsurance} />
      </View>

      <MenuButton title="Calcular" onPress={() => {}} />

      <Text style={styles.result}>Subtotal: ${subtotal}</Text>
      <Text style={styles.result}>Seguro: ${seguro}</Text>
      <Text style={styles.total}>Total: ${total}</Text>
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
