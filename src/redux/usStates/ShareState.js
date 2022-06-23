import { createSlice } from '@reduxjs/toolkit';

const shareState = createSlice({
  name: 'shareState',
  initialState: [],
  reducers: {
    pickState(state, action) {
      return action.payload;
    },
    unpickState(state) {
      const temp = state;
      temp.picked = false;
      return temp;
    },
  },
});

export const { pickState, unpickState } = shareState.actions;
export default shareState.reducer;
