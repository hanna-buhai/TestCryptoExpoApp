import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    width: '80%',
    textAlign: 'left',
  },
  input: {
    height: 40,
    width: '80%',
    marginTop: 8,
    marginBottom: 24,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  inputError: {
    borderColor: 'red',
  },
  loginButton: {
    minWidth: 200,
  },
})

export default styles
