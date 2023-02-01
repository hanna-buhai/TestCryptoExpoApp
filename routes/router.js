import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from '../components/pages/LoginPage/LoginPage'
import CryptoListPage from '../components/pages/CryptoListPage/CryptoListPage'
import CryptoChartPage from '../components/pages/CryptoChartPage/CryptoChartPage'

import { PAGES, PAGE_TITLES } from '../constants/navigation'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={PAGES.LOGIN_PAGE}
          component={LoginPage}
          options={{ title: PAGE_TITLES[PAGES.LOGIN_PAGE] }}
        />
        <Stack.Screen
          name={PAGES.CRYPTO_LIST_PAGE}
          component={CryptoListPage}
          options={{ title: PAGE_TITLES[PAGES.CRYPTO_LIST_PAGE] }}
        />
        <Stack.Screen
          name={PAGES.CRYPTO_CHART_PAGE}
          component={CryptoChartPage}
          options={{ title: PAGE_TITLES[PAGES.CRYPTO_CHART_PAGE] }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
