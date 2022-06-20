import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6ImZmMWM5MzA1YzkwNTY4ZTQzMmYyNGIyNjE3YzUyYWMwMjQyOWUwNWIzMDllMmU3MmQzYzQwMzllMTBjNTUyZDdlZjJlMTI1MDYyNDM0NjM1IiwiaWF0IjoxNjU1NzY3ODkxLCJuYmYiOjE2NTU3Njc4OTEsImV4cCI6MTY1NTc3MTQ5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.jktwCPeCz3Hk7shYCmCKCVBsOiFRrdheT6Ts-pnHYY5CO1CYf-0pwTStzJqQ0bH59D-cCGGGV933JwAmrP2TtCZbwhbv9cn5gDzQYuIKhQ0f5yCdsPFhtceSmNjgMSMXHfwr2-lAHs6GG42m_tDqvgcc1WIkOxMbgSyZzxMS-ZBBaw5ByNZZ-RySgmoHx_0lDQUHrN11QRzWwy_lKoOcmbeCgn_EF1C5K5YCkm84ca4pgB0z68Z1hIzcFVUlQXlSC6p8Z-IlP2MRg_iX325l8-3RvQLOs_ZTNMvN0Zw-sxKDhy-7eRWRCf-e3a4PqMTqzsBMDzP4nUk3MxJquZDnKw'
export const getState = createAsyncThunk('FETCHED_CITIES', async () => {
  const response = await axios
    .get(`https://api.petfinder.com/v2/animals`, {
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
  reducers: {
    enterShelter(state) {
      console.log('enter')
    },
    leaveShelter(state) {
      console.log('leave')
    },
    enterState(state, action) {
      console.log(action)
    }
  },
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

export const {enterShelter, leaveShelter, enterState} = stateSlice.actions;
export default stateSlice.reducer
