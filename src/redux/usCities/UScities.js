import axios from 'axios';

// curl -d "grant_type=client_credentials&client_id=mmEhtumwto5LvE6ydszE2t9Fj9KiwWfNTCR6HHZLrQDjFmQUbe&client_secret=9GGUczu5pGaRqMslKUTNttA16zPRAb0O9kuvE9Ez" https://api.petfinder.com/v2/oauth2/token
const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtbUVodHVtd3RvNUx2RTZ5ZHN6RTJ0OUZqOUtpd1dmTlRDUjZISFpMclFEakZtUVViZSIsImp0aSI6IjYxZTU0YTdhYjY2OTVkMjdjYTU0OTQxNzFhZDkwNDJmMzRmMmE0YmE1MWY1YzhiMTlmNTFkY2E0MTYwN2NiOWU5MGM1ZjJmZDk3YTE4N2JmIiwiaWF0IjoxNjU2MDI0NDM3LCJuYmYiOjE2NTYwMjQ0MzcsImV4cCI6MTY1NjAyODAzNywic3ViIjoiIiwic2NvcGVzIjpbXX0.emN5B3Q2h1LwTle-6Da_7tDbi5LhxgptIdl7kUR1mZKTCZCmnFHm_nFKXr3BhOPG3fMxIlKv462gJGOQErPCj6H03TaIEImYRHmqV8iv7spnrK6WRlMR6kbKGYNQ1s_Zr6baQb8_mkZvL8EhB7iUG9pMFvOLqTtN1aS0nC1CN-vCuhhiYqS7w5hpVfHSjkilu3fItLDQ2ZRTBsIx4B1i6YJUcuDUNQ0gN84oHVVn1LDqdUYWVuwsNhttuLzYdOS31LfK_dt9xaJnHtwCEI40tN4L7wAt_swir4NkZwrbTdClRgLMHf2_rFsoEYlhUg1RnsWTguSxb-tIrukNf8egsQ';
const URL = 'https://api.petfinder.com/v2/animals?location=';

const statesReducer = (state = [{ loads: true }], { type, payload }) => {
  switch (type) {
    case 'FETCHED_CITIES':
      return [...payload.animals];
    default:
      return state;
  }
};

const getStatesUS = (code) => async (dispatch) => {
  const response = await axios
    .get(`${URL}${code}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
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
