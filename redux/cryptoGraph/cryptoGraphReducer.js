import { createSlice } from '@reduxjs/toolkit'
import { getCryptocurrency } from '../../api/cryptoApi'

export const cryptoSlice = createSlice({
  name: 'cryptoGraph',
  initialState: {
    data: [],
  },
  reducers: {
    pushDataPoint: (state, action) => {
        const newDataList = [ ...state.data]
        newDataList.push(action.payload)
        state.data = newDataList
    },
    clearDataSet: (state) => {
        state.data = []
    }
  },
})

export const fetchCryptocurrencyData = (currencyId) => {
  return async dispatch => {
    const list = await getCryptocurrency(currencyId)
    dispatch(pushDataPoint(list))
  }
}

export const { clearDataSet, pushDataPoint } = cryptoSlice.actions

export default cryptoSlice.reducer
