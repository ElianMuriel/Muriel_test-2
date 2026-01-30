import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MenuButton from "../src/components/MenuButton";

export default function ProductsScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadCatalog = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=12"
      );
      const data = await res.json();
      setItems(data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de vehículos</Text>
      <Text style={styles.subtitle}>Referencial (API pública)</Text>

      <MenuButton title="Cargar catálogo" onPress={loadCatalog} />

      {loading && <ActivityIndicator size="large" style={{ marginTop: 16 }} />}
      {error && (
        <Text style={styles.error}>No se pudo cargar catálogo</Text>
      )}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12, marginTop: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.download_url }} style={styles.image} />
            <Text style={styles.cardText}>Modelo: {item.author}</Text>
            <Text style={styles.cardText}>ID: {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
  title: { fontSize: 22, fontWeight: "900" },
  subtitle: { color: "#555", fontWeight: "700", marginBottom: 12 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
  },
  image: { height: 140, borderRadius: 8 },
  cardText: { fontWeight: "700", marginTop: 4 },
  error: { color: "red", marginTop: 12, fontWeight: "700" },
});
