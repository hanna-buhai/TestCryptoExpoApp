import { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { PAGES } from '../../../constants/navigation'
import styles from './LoginPage.styles'
import { setUserData } from '../../../redux/user/userReducer'

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [hasError, setHasError] = useState(false)

  const dispatch = useDispatch()

  const openCryptoListPage = () => {
    navigation.navigate(PAGES.CRYPTO_LIST_PAGE)
  }

  const login = () => {
    if (!!username) {
      openCryptoListPage()
      dispatch(setUserData({ username }))
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
