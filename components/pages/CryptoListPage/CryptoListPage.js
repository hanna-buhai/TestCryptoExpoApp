import { StyleSheet, Text, View, Button } from 'react-native'
import { PAGES } from '../../../constants/navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CryptoListPage = ({ navigation }) => {
  const openCryptoChartPage = () => {
    navigation.navigate(PAGES.CRYPTO_CHART_PAGE)
  }

  return (
    <View style={styles.container}>
      <Text>This is a Cryptocurrency List Page</Text>
      <Button title="Go to Chart Page" onPress={openCryptoChartPage} />
    </View>
  )
}

export default CryptoListPage
