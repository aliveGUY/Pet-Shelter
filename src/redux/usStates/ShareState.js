import { createSlice } from '@reduxjs/toolkit'

const shareState = createSlice({
  name: 'shareState',
  initialState: [],
  reducers: {
    pickState(state, action) {
      return action.payload
    },
  },
})

export const { pickState } = shareState.actions
export default shareState.reducer
