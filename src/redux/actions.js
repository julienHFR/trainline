import { Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setCallings(state, callings, url) {
  return state.set('callings', callings).set('url', url);
}

export function setServices(state, services) {
  return state.set('services', services);
}

export function setError(state, error) {
  return state.set('error', error);
}
