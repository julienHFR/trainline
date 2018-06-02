import { setCallings, setServices, INITIAL_STATE } from './actions';

// Mapping between the actions and the actual functions
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CALLINGS':
      return setCallings(state, action.callings);
    case 'SET_SERVICES':
      return setServices(state, action.services);
    default:
      return state;
  }
}
