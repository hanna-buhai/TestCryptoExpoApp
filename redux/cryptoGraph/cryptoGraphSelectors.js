import { createSelector } from 'reselect'

const selectCryptocurrencyData = state => state.cryptoGraph.data

export const selectCryptocurrencyUSDDataPoints = createSelector(selectCryptocurrencyData, items =>
  items.map(item => Number(item.price_usd))
)

export const selectCryptocurrencyName = createSelector(selectCryptocurrencyData, items => items.length > 0 ? items[0].name : '')