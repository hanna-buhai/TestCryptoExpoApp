import { createSlice } from '@reduxjs/toolkit'
import { getCryptoList } from '../../api/cryptoApi'

export const cryptoSlice = createSlice({
  name: 'cryptoList',
  initialState: {
    data: [],
    filters: {},
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setFilters: (state, action) => {
      state.filters = action.payload
    },
  },
})

export const fetchCryptoData = () => {
  return async dispatch => {
    const list = await getCryptoList()
    dispatch(setData(list))
  }
}

export const { setData, setFilters } = cryptoSlice.actions

export default cryptoSlice.reducer
