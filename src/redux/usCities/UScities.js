import axios from 'axios';

const URL = 'https://api.petfinder.com/v2/animals?location=';

const key = async () => {
  const call = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: 'mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe',
      client_secret: '9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez',
    }),
  });
  return call.json();
};

const statesReducer = (state = [{ loads: true }], { type, payload }) => {
  switch (type) {
    case 'FETCHED_CITIES':
      return [...payload.animals];
    default:
      return state;
  }
};

const getStatesUS = (code) => async (dispatch) => {
  const kkey = await key();
  const response = await axios
    .get(`${URL}${code}`, {
      headers: {
        Authorization: `Bearer ${kkey.access_token}`,
      },
    })
    .then((response) => response.data);
  dispatch({
    type: 'FETCHED_CITIES',
    payload: response,
  });
};

export default statesReducer;
export { getStatesUS };
