import { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { PAGES } from '../../../constants/navigation'
import styles from './LoginPage.styles'

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [hasError, setHasError] = useState(false)

  const openCryptoListPage = () => {
    navigation.navigate(PAGES.CRYPTO_LIST_PAGE)
  }

  const login = () => {
    if (!!username) {
      openCryptoListPage()
      // TODO save user data
      onChangeUsername('')
    } else {
      setHasError(true)
    }
  }

  const onChangeUsername = value => {
    setUsername(value)
    setHasError(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Username:</Text>
      <TextInput
        style={[styles.input, hasError ? styles.inputError : {}]}
        onChangeText={onChangeUsername}
        value={username}
        autoFocus
        textContentType={'username'}
      />
      <Button style={styles.loginButton} title={'Login'} onPress={login} />
    </View>
  )
}

export default LoginPage
