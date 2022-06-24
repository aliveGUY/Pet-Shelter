import { createSlice } from '@reduxjs/toolkit';

const petSlice = createSlice({
  name: 'shareState',
  initialState: [],
  reducers: {
    pickPet(state, action) {
      return action.payload;
    },
  },
});

export const { pickPet } = petSlice.actions;
export default petSlice.reducer;
