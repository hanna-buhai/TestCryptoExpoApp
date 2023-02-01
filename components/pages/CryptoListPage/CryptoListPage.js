import { StyleSheet, Text, View, Button } from 'react-native'
import { useSelector } from 'react-redux'
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
  const username = useSelector(state => state.user.data.username)

  const openCryptoChartPage = () => {
    navigation.navigate(PAGES.CRYPTO_CHART_PAGE)
  }

  return (
    <View style={styles.container}>
      <Text>{`Welcome, ${username}`}</Text>
      <Text>This is a Cryptocurrency List Page</Text>
      <Button title="Go to Chart Page" onPress={openCryptoChartPage} />
    </View>
  )
}

export default CryptoListPage
