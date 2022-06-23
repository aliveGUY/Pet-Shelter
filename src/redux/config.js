import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import statesReducer from './usCities/UScities';
import ShareState from './usStates/ShareState';
import petSlice from './pets/pet_redux';

const persistConfig = {
  key: 'usStates',
  storage,
};

const rootReducer = combineReducers({
  states: statesReducer,
  shareState: ShareState,
  pets: petSlice,
});

const persistedReduc = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReduc, applyMiddleware(thunk));
const persistedStore = persistStore(store);
export default store;
export { persistedStore };
