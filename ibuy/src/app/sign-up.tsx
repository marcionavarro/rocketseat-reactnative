import { router, useLocalSearchParams } from 'expo-router'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SignUp() {
  const { id, name } = useLocalSearchParams()

  function back() {
    if (!router.canGoBack()) {
      return Alert.alert("Não é possivel voltar!")
    }
    router.back()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  back: {
    fontSize: 16,
    fontWeight: "bold"
  },
  title: {
    fontSize: 22
  }
})