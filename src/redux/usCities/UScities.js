import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Key mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe
// Secret 9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez

const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6IjFhOWYyYzc2YzYwODM0Njk4ZjQ5MDNiNzRhZTg0NTQxM2M1N2I1Yzc1MTQyM2M2YTg4ZmU2Y2JkYWVmNWU2Y2FkOWRmYTk1YmY0YjMwMDRlIiwiaWF0IjoxNjU1ODM1NjIxLCJuYmYiOjE2NTU4MzU2MjEsImV4cCI6MTY1NTgzOTIyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.sigxG0-mOU40SEsZGEsk8KziZ6UAoHbxgYjbptIUyV_o3__tpfOXMyHq5dt45iBn7A7F2dSN1ZyNnwDQ2-l0XvDIVmtN-_TABrIRjqkdIxRMEzxc0OoGCVbd8fLfLOloZz-doNndSGkLDgIam8Cbw23Dz2l24_CMd_4B9oMoF8kvXSIDbCumMOPFFghfGbKmfDOU1bknO1e0nTeAgZfO7CJm8poLajYwdOAa8ENHaN76xgmpr-XyU9DSjEOhdnCZUkRm8BDzXOrvI_687SobguhsXnxsPJ83SQJ7939XaD1Fr8sK0wW7_Sm8kegZtEx7hkLDAMRyuBrerxBXuAX3HA'
export const getState = createAsyncThunk('FETCHED_CITIES', async (code) => {
  const response = await axios
    .get(`https://api.petfinder.com/v2/animals?location=${code}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => response.data)
  return response.animals
})

const stateSlice = createSlice({
  name: 'states',
  initialState: [{ loads: true }],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getState.pending, (state, action) => {
        return [{ loads: true }]
      })
      .addCase(getState.fulfilled, (state, action) => {
        return action.payload
      })
  },
})

export const {enterShelter, leaveShelter} = stateSlice.actions;
export default stateSlice.reducer
