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

const LoginPage = ({ navigation }) => {
  const openCryptoListPage = () => {
    navigation.navigate(PAGES.CRYPTO_LIST_PAGE)
  }

  return (
    <View style={styles.container}>
      <Text>This is a Login Page</Text>
      <Button title="Go to Crypto List" onPress={openCryptoListPage} />
    </View>
  )
}

export default LoginPage
