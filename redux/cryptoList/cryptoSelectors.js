import { createSelector } from 'reselect'
import { FILTER_TYPES } from '../../constants/crypto'

const filterComparator = (item, filter) => {
    switch (filter.type) {
        case FILTER_TYPES.MINIMUM: {
            return item[filter.field] >= filter.value
        }
        default: return true
    }
}

const selectCryptoListItems = state => state.cryptoList.data
const selectCryptoListFilters = state => state.cryptoList.filters

export const selectFilteredCryptoList = createSelector(selectCryptoListItems, selectCryptoListFilters, (items, filters) =>
  {
    let filteredItems = items

    let i = 0
    while (i < filters.length && filteredItems.length > 0) {
        filteredItems = filteredItems.filter(item => filterComparator(item, filters[i]))
        i++
    }
    return  filteredItems 
  }
)