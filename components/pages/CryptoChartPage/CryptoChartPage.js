import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CryptoChartPage = ({ route, navigation }) => {
  const { currencyId } = route.params
  return (
    <View style={styles.container}>
      <Text>This is a Cryptocurrency Chart Page for {currencyId}</Text>
    </View>
  )
}

export default CryptoChartPage
