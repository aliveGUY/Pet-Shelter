import axios from 'axios'

// curl -d "grant_type=client_credentials&client_id=mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe&client_secret=9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez" https://api.petfinder.com/v2/oauth2/token
const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6ImUwN2Y3M2VkYTRlNDBjOWRmOTFlZmUxNWNlNmVhMWFhODNhZTc5YmE5YzgxM2FhZWI3NDAyMzAxZWY4Mjk3MTEzNmNjY2ZkZTM3ZWFhZGQyIiwiaWF0IjoxNjU2MDA2MDE3LCJuYmYiOjE2NTYwMDYwMTcsImV4cCI6MTY1NjAwOTYxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.HwuEIrLhP61sK5cOobISy3IRWr_QpnpcDdFNqTCJbEVGUgi7pNCcPKGXZtPg2zY4kPQYgQ0KMIK5iu4t5LpzszCqpj_wu_4eTmJnItVaA55tmlMx201OU5Ettrm-zqJkEuQTwWUNDByTBfh1hvqJGRCmKoVtht35n5C7Y6CC_MvPIMzf5O-3vXyPg6RlRURyHGnSBBl4S7evJVct9iKmxKaV6al4z2ZYxSYvfMdU8NmrYzesakXHwOsUAjISxz3A6ht2hNiGnL6sx8bVci9ue5LfJ9l1LJ0OZokWbPA3m195ISvr95njUbkYeKfD3ymwXaUuq8UdoDMH-4Fug7iCUw'
const URL = 'https://api.petfinder.com/v2/animals?location='

const statesReducer = (state = [{ loads: true }], { type, payload }) => {
  switch (type) {
    case 'FETCHED_CITIES':
      return [...payload.animals]
    default:
      return state
  }
}

const getStates_US = (code) => async (dispatch, getState) => {
  const response = await axios
    .get(`${URL}${code}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => response.data)
  dispatch({
    type: 'FETCHED_CITIES',
    payload: response,
  })
}

export default statesReducer
export { getStates_US }
