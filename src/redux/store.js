import { createStore, combineReducers } from 'redux';

// All the different reducers of the app
import servicesReducer from './services/reducer';
import callingsReducer from './callings/reducer';

// Mapping all the reducers to the store
export default function makeStore() {
  const reducers = combineReducers({ services: servicesReducer, callings: callingsReducer });
  return createStore(reducers);
}

export const store = makeStore();
