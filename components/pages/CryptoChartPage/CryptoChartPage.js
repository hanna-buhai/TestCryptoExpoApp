import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CryptoChartPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is a Cryptocurrency Chart Page</Text>
    </View>
  )
}

export default CryptoChartPage
