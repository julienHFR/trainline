import { Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setServices(state, services) {
  return state.set('services', services);
}
