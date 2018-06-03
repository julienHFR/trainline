import { setCallings, setServices, setError, INITIAL_STATE } from './actions';

// Mapping between the actions and the actual functions
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CALLINGS':
      return setCallings(state, action.callings, action.url);
    case 'SET_SERVICES':
      return setServices(state, action.services);
    case 'SET_ERROR':
      return setError(state, action.error);
    default:
      return state;
  }
}
