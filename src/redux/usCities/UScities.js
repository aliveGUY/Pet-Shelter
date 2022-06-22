import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Key mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe
// Secret 9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez

const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6IjFmOTAwZjZmZDZlMDAxMWE5ZjRmMjMyZGIzMDE1NGM1ZDg2NmVhYmYwNWJkOTI4OWI2MjFkNWQ2ZTQ4NWI3ODg4Njc5N2NlYjFiMjc3NjdiIiwiaWF0IjoxNjU1ODU2OTg2LCJuYmYiOjE2NTU4NTY5ODYsImV4cCI6MTY1NTg2MDU4Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.TY3FUaL7lvgRqNPoqFCYBAaQ_8ZI3DOUkAqOrmqTHsTDcYMQTxqk4w1WU2d1OXOLGNRK6yEb7oKD0g7o8oHpyOPIEvgd_gIQxeY0d-nOAHiMvAf1SH_Yu_Th5224CJ9gii6QW6iZ-2UlyFzu9eHCWYCwdhNnViAXsJ0n8Yu9HaD2Ue_SFmnymzBXBCFgKvnEvz2LWlL4PfQE4451iWHoRNoH8brn7HfQ9Sys4Y3X5TWEBmPFOriMHg_0FanqujIhMoS61imIFeVPJPVFuEWWg6pkdN0AUO9pH2oEwMNR_fqZqzTYidTfOQfI0UOETcTtQna5PZcT4B-DiuUrTPD_nA'
export const getState = createAsyncThunk('FETCHED_CITIES', async (code) => {
  const response = await axios
    .get(`https://api.petfinder.com/v2/animals?location=${code}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => response.data)
    .catch((err) => err)

  return response.animals
})

let init = [{ loads: true }]

const stateSlice = createSlice({
  name: 'states',
  initialState: init,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getState.pending, (state, action) => {
        return [{ loads: true }]
      })
      .addCase(getState.fulfilled, (state, action) => {
        init = action.payload
        return action.payload
      })
  },
})

export const { enterShelter, leaveShelter } = stateSlice.actions
export default stateSlice.reducer
