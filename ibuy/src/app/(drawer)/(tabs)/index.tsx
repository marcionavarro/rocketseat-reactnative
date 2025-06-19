import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Products() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de produtos</Text>

      <TouchableOpacity onPress={() => router.navigate("/product/21")}>
        <Text>Abrir Produto</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    gap: 30
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
})