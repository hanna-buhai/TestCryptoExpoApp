import { createSelector } from 'reselect'

const selectCryptocurrencyData = state => state.cryptoGraph.data

export const selectCryptocurrencyUSDDataPoints = createSelector(selectCryptocurrencyData, items =>
  items.map(item => Number(item.price_usd))
)