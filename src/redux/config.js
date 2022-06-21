import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import stateSlice from './usCities/UScities'
import ShareState from './usStates/ShareState';

const rootReducer = combineReducers({
  states: stateSlice,
  shareState: ShareState,
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
