import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userReducer'
import cryptoReducer from './cryptoList/cryptoReducer'
import cryptoGraphReducer from './cryptoGraph/cryptoGraphReducer'

export default configureStore({
  reducer: {
    user: userReducer,
    cryptoList: cryptoReducer,
    cryptoGraph: cryptoGraphReducer,
  },
})
