import { createSlice } from '@reduxjs/toolkit'
import { getCryptoList } from '../../api/cryptoApi'

export const cryptoSlice = createSlice({
  name: 'cryptoList',
  initialState: {
    data: [],
    filters: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    addFilter: (state, action) => {
      const filtersList = state.filters.filter(
        item => !(item.field === action.payload.field && item.type === action.payload.type),
      )
      filtersList.push(action.payload)
      state.filters = filtersList
    },
    removeFilter: (state, action) => {
      const filtersList = state.filters.filter(
        item => !(item.field === action.payload.field && item.type === action.payload.type),
      )
      state.filters = filtersList
    },
  },
})

export const fetchCryptoData = () => {
  return async dispatch => {
    const list = await getCryptoList()
    dispatch(setData(list))
  }
}

export const { setData, setFilters, addFilter, removeFilter } = cryptoSlice.actions

export default cryptoSlice.reducer
