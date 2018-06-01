import { setCallings, INITIAL_STATE } from './actions';

// Mapping between the actions and the actual functions
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CALLINGS_SET_CALLINGS':
      return setCallings(state, action.callings);
    default:
      return state;
  }
}
