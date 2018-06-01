import { setServices, INITIAL_STATE } from './actions';

// Mapping between the actions and the actual functions
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SERVICES_SET_SERVICES':
      return setServices(state, action.services);
    default:
      return state;
  }
}
