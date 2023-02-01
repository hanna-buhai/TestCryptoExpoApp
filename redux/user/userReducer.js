import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    data: {
      username: '',
    },
  },
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
