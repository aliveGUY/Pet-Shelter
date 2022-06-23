import axios from 'axios'

// curl -d "grant_type=client_credentials&client_id=mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe&client_secret=9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez" https://api.petfinder.com/v2/oauth2/token
const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6IjU1NmY5ZjRjOTg2ODA5OTYyOTM4OTQ1YjRhNjhlMGMyYTM2MjdmYzdmNjU1ZTRhZjRmNzQ1Y2FlZDlkMjc1YWFjZWFkZjM3NTM0MzM3NWE4IiwiaWF0IjoxNjU1OTM5Nzk1LCJuYmYiOjE2NTU5Mzk3OTUsImV4cCI6MTY1NTk0MzM5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Q_exGDv73loW4snH5Yo4PSFzIW7RdnLFZPo-H_8rjfUhQ47WVJxg3BE7p8bXklSIEdzMeuzHptFF8B8vmpQtURVJ-ueeJ5DvlwdpvFk3pdq0WbM7xAYQ60IfLuQCHdAjcMOZDNWMytY4a3ST6UBKtKGMEo5d4tWNL02izhqcmALzbwax7p2sUMbGEIkA3MjAP57Nn2Q6w0-TwUHIvjuDPwFfzV0xXe0UXc0UxN_tWyKIZHNJPA_u9HBoTjaCG9M969M7qhmYr9XxgbEBpxc7f1SjAHr_JO4kbdcBdzlp1jad0y9VnkKNgqToV3nIgiA0rPGBKgBxwKl7e-D8zTq3bg'
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
