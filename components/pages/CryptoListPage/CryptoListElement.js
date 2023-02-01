import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
  },
  cryptoSymbol: {
    width: 48,
  },
  cryptoName: {
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
  },
})

const CryptoListElement = ({ id, symbol, name, percentChange24h, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.cryptoSymbol}>{symbol}</Text>
      <Text style={styles.cryptoName}>{name}</Text>
      <Text>{percentChange24h}% in 24-h</Text>
    </TouchableOpacity>
  )
}

export default CryptoListElement
