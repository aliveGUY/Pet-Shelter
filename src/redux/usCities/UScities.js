import axios from 'axios'

// curl -d "grant_type=client_credentials&client_id=mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe&client_secret=9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez" https://api.petfinder.com/v2/oauth2/token
const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6ImUzMjQxZjEwNWFlMzU4ZWI4N2FlN2RmZWRjZjhiNzViNjM3YmIyZmNjZDNlNTFhYWRkYmE2NTJlMWYxMzExMGY1ZDJjOWM2MjNkOTExYTlhIiwiaWF0IjoxNjU2MDE5MjE1LCJuYmYiOjE2NTYwMTkyMTUsImV4cCI6MTY1NjAyMjgxNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.yM-6KJqQowmyUaaY2lFDBS9AsqOwkZbKq4gk8rHqH_VLOE0iylV8GTaTZz6YblTu0vd2MrH8kLSyLrO5qsi74_Azn2Ze_D6v2U-p_gmBJJ9b3Aq-6f3zaI4lJVPt9Sjj1xmVmkYVr6ak2yV5K_7-rymwLuHqIabcQV_ROQ43pGjkOneSBYSpS7wup2qCEDQWzXE5xiSyGj-Ts-Dr-wTbe0SjIjvTLq0qKeF48GWPCVK8reGl9Z2Ze8IwG0DNLdWcQLk8coLEEspFcO2GShK_WctvptX4OjDZceP3i9SCvh_9ZJMO9k7M-N9WTm44Ros7lXLp3jfH9dBfIHos85mZSw'
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
