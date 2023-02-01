import { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { useNetInfo } from "@react-native-community/netinfo";
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

const CHART_REFRESH_INTERVAL = 30 * 1000
const REFRESH_ATTEMPTS_LIMIT = 5

const CryptoChartPage = ({ route, navigation }) => {
  const { currencyId } = route.params
  
  const data = useSelector(selectCryptocurrencyUSDDataPoints)
  const contentInset = { top: 20, bottom: 20 }
  const now = new Date()
  const timeObject = new Date(now.getTime() + CHART_REFRESH_INTERVAL);
  const countDownDate = new Date(timeObject).getTime(); 
  const [targetCountDownDate, setTargetCountDownDate] = useState(countDownDate)
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  const refreshCount = useRef(0)

  const netInfo = useNetInfo();
  const dispatch = useDispatch()

  useEffect(() => {
    if (currencyId) {
      refreshCount.current++
      dispatch(fetchCryptocurrencyData(currencyId))

      const interval = setInterval(() => {
        const newCountdown = targetCountDownDate - new Date().getTime()
        if (newCountdown > 0) {
          setCountDown(newCountdown);
        } else {
          const now = new Date()
          const timeObject = new Date(now.getTime() + CHART_REFRESH_INTERVAL);
          const countDownDate = new Date(timeObject).getTime(); 
          setTargetCountDownDate(countDownDate)
        }    
      }, 1000);
      if (refreshCount.current >= REFRESH_ATTEMPTS_LIMIT || !netInfo.isConnected) clearInterval(interval)
    return () => clearInterval(interval)
  };
  }, [currencyId, targetCountDownDate, netInfo.isConnected])

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
      <Text>Seconds left: {netInfo.isConnected ? Math.ceil(countDown / 1000) : '--:--'}</Text>
      <View style={styles.graphContainer}>
          <YAxis
              data={data}
              contentInset={contentInset}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={16}
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
