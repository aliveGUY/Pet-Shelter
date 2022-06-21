import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Key mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe
// Secret 9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez

const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6IjkzMTM5ZmM0MzQ4ZDMyYjM5YWFlY2U1MDA2YjdlNjdmYjI5MTYwMTRhYmY0MmI1OWNlNDdlMjU3MmI3YjJlZDhhYjBjNGMzZDFiMmU1NjFjIiwiaWF0IjoxNjU1ODM5MjgxLCJuYmYiOjE2NTU4MzkyODEsImV4cCI6MTY1NTg0Mjg4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.kA1o3zrvJi0cgr7D9MwhtuhFH4dvofXEnA-XT5pZhFz4m29WfuEYB5xV1jICUG8hiXq2Vk9x9WbTQnlCgFMnx2cFt7lXIW5ta_AAax7m5IkH3u7XS9jaEZ_7itVLvY4AnnWtlS2CTtRb7LvrYFQtNn71stWkJjuJp3lGjU2lzf6SjpFgMvsYLUSXLu9KcFuNaT0JdYW6QpG6OQ0moLgOb5UzE664yhnKI_BlBQ5gQdQWGwNJb1p7G0shREoa1ena9JS9IfCYoVDFgjiPGUHwQxYNyMIU0-DGQcbkNA3VSImfKdPzMpYJQAXcX9z6zRMrwqw-4fVsx4HjJEehAqZXIQ'
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
