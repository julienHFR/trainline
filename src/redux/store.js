import { createStore } from 'redux';

// All the different reducers of the app
import reducer from './reducer';

// Mapping all the reducers to the store
export default function makeStore() {
  return createStore(reducer);
}

export const store = makeStore();
