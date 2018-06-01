import { Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setCallings(state, callings) {
  return state.set('callings', callings);
}
