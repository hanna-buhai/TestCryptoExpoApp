import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { fetchCryptocurrencyData, clearDataSet } from '../../../redux/cryptoGraph/cryptoGraphReducer'
import { selectCryptocurrencyUSDDataPoints } from '../../../redux/cryptoGraph/cryptoGraphSelectors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  graphContainer: {
    height: 200, flexDirection: 'row'
  }
})


const CryptoChartPage = ({ route, navigation }) => {
  const { currencyId } = route.params
  
  const data = useSelector(selectCryptocurrencyUSDDataPoints)
  const contentInset = { top: 20, bottom: 20 }

  const dispatch = useDispatch()

  useEffect(() => {
    if (currencyId) dispatch(fetchCryptocurrencyData(currencyId))
  }, [currencyId])

   useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        dispatch(clearDataSet())
      }),
    [navigation]
  );


  return (
    <View style={styles.container}>
      <Text>This is a Cryptocurrency Chart Page for {currencyId}</Text>
      <View style={styles.graphContainer}>
          <YAxis
              data={data}
              contentInset={contentInset}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value} USD`}
          />
          <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={contentInset}
          >
              <Grid />
          </LineChart>
      </View>
    </View>
  )
}

export default CryptoChartPage
