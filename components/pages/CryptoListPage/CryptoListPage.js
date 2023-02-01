import { useState, useEffect } from 'react'
import { Text, View, Button, TextInput, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { PAGES } from '../../../constants/navigation'
import { fetchCryptoData, addFilter, removeFilter } from '../../../redux/cryptoList/cryptoReducer'
import CryptoListElement from './CryptoListElement'
import styles from './CryptoListPage.styles'
import { FILTER_FIELDS, FILTER_TYPES } from '../../../constants/crypto'
import { selectFilteredCryptoList } from '../../../redux/cryptoList/cryptoSelectors'

const ListItemSeparator = () => <View style={styles.listItemSeparator}></View>

const CryptoListPage = ({ navigation }) => {
  const username = useSelector(state => state.user.data.username)
  const [filterValue, setFilterValue] = useState('')

  const currencyList = useSelector(selectFilteredCryptoList)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCryptoData())
  }, [])

  const openCryptoChartPage = currencyId => () => {
    navigation.navigate(PAGES.CRYPTO_CHART_PAGE, { currencyId })
  }

  const setListFilter = () => {
    if (filterValue !== '') {
      dispatch(
        addFilter({
          field: FILTER_FIELDS.PERCENT_CHANGE_24H,
          type: FILTER_TYPES.MINIMUM,
          value: Number(filterValue.replace(',', '.')),
        }),
      )
    } else {
      dispatch(
        removeFilter({
          field: FILTER_FIELDS.PERCENT_CHANGE_24H,
          type: FILTER_TYPES.MINIMUM,
        }),
      )
    }
  }

  const renderCurrencyItem = ({ item }) => (
    <CryptoListElement
      key={item.id}
      symbol={item.symbol}
      name={item.name}
      percentChange24h={item.percent_change_24h}
      onPress={openCryptoChartPage(item.id)}
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
          <TextInput
            style={styles.input}
            onChangeText={setFilterValue}
            value={filterValue}
            keyboardType={'numeric'}
          />
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
