import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import CodersList from './screens/CodersList'

const client = new ApolloClient({
  // Below IP is only needed for Android or Actual Phone Devices on the same network.
  // iOS Simular can handle using localhost with the ExpoGo app automatically
  // Additionally, you can setup a static IP address for your computer mac address,
  // therefore your IP address will never change and the code will always work on the same network

  // localhost:4000 is our GraphQL server default localhost + port
  // uri: 'http://localhost:4000',

  // 192.168.1.10:4000 is our GraphQL server default {{local-ip}} + port
  // uri: 'http://192.168.1.10:4000',

  uri: 'http://192.168.1.10:4000',
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Daniel Open up App.js to start working on your app!</Text> */}
      <ApolloProvider client={client}>
        <CodersList />
        <StatusBar style="auto" />
      </ApolloProvider>
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
