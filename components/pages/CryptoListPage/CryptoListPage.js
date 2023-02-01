import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { PAGES } from '../../../constants/navigation'

import CryptoListElement from './CryptoListElement'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  welcomeContainer: {
    marginTop: 16,
    marginBottom: 4,
    paddingLeft: 8,
  },
  filterContainer: {
    marginBottom: 8,
    padding: 8,
  },
  filterInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginLeft: 8,
    marginRight: 8,
  },
})

const CryptoListPage = ({ navigation }) => {
  const username = useSelector(state => state.user.data.username)
  const [filterValue, setFilterValue] = useState('')

  const currencyList = []

  const openCryptoChartPage = () => {
    navigation.navigate(PAGES.CRYPTO_CHART_PAGE)
  }

  const setListFilter = () => {}

  const renderCurrencyItem = ({ item }) => (
    <CryptoListElement
      key={item.id}
      id={item.id}
      symbol={item.symbol}
      name={item.name}
      percentChange24h={item.percent_change_24h}
      onPress={openCryptoChartPage}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text>{`Welcome, ${username}`}</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text>Filter by minimum 24-hr % change:</Text>
        <View style={styles.filterInputContainer}>
          <TextInput style={styles.input} onChangeText={setFilterValue} value={filterValue} />
          <Button title="Filter" onPress={setListFilter} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={currencyList}
          renderItem={renderCurrencyItem}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </View>
  )
}

export default CryptoListPage
