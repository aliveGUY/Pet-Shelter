import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import stateSlice from './us_states/current_us_state'

const rootReducer = combineReducers({
  states: stateSlice
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
