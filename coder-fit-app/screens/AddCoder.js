import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function AddCoder() {
  return (
    <View style={styles.container}>
      <Text>Create New Coder</Text>
      <View>
        <TextInput placeholder="Coder Name..." />
        <TextInput placeholder="Coder Description..." />
      </View>
      <Button title="Add Coder" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
