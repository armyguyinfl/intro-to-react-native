import { StyleSheet, Text, View, Button } from 'react-native'
import { useQuery, gql } from '@apollo/client'

import { CODERS_QUERY } from '../queries'
// Not needed at this time
// const coderQuery = useQuery(CODERS_QUERY)

export default function CodersList({ navigation }) {
  const { loading, error, data } = useQuery(CODERS_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error! {error.message}</Text>

  return (
    <View style={styles.container}>
      <Text>The Awesome Coders:</Text>
      {data.coders.map((coder) => (
        <View className="coder" key={coder.id}>
          <Text>{coder.name}</Text>
          <Text>{coder.description}</Text>
        </View>
      ))}
      <Button
        title="Add a Coder"
        onPress={() => navigation.navigate('Add a Coder')}
      />
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
