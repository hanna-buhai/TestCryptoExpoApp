import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userReducer'
import cryptoReducer from './cryptoList/cryptoReducer'

export default configureStore({
  reducer: {
    user: userReducer,
    cryptoList: cryptoReducer,
  },
})
