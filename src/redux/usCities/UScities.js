import axios from 'axios'

// curl -d "grant_type=client_credentials&client_id=mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe&client_secret=9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez" https://api.petfinder.com/v2/oauth2/token
const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6IjQ3ZDUwYTA2NDNkZDg5NGI4M2YwZDMwYWY5OTc3ZGQ3ZmZiZGYzMjRjZjZhOTZkMGFjODIxZDE1NzUzYmE3NjUyMDYwZWZhYTk3YWJmNGFjIiwiaWF0IjoxNjU2MDEyOTU5LCJuYmYiOjE2NTYwMTI5NTksImV4cCI6MTY1NjAxNjU1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.jb7eCcW92KbHrIhPzWp2HpPBXeoXNve6T9_ETkAdaavF8ijt6Q0ENV5zWpubIxcSCUpWzGsyatRyFOEVXhvvdiTf4yiQCL_vQPNPsc60b0Wr6gEtZla94j5twCRsGIeP-9GqY0P4gJ0ao2wdSrzz-weGp21haOU43IogEILXnqCO8F1z5C-Y7VYnimebCegcLubffdWNF0EP5vJi6Gd5ZZ9UbsoRZRj-92Gr9lyfkwNyWyEgsxa-4X2Nhvb1t16KuNvyn1vrlKLmj8MISKRcgah12F4zWFGdvFjckOldb1hmnfM_nJi_-FZvkGtaMaf7IH5MvQ05EIh9iRFn9_w7_w'
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
