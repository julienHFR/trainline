import { Map } from 'immutable';

export const INITIAL_STATE = Map();

/**
 * Set callings and corresponding api url
 * @param {*} state
 * @param {*} callings
 * @param {*} url
 */
export function setCallings(state, callings, url) {
  return state.set('callings', callings).set('url', url);
}

/**
 * Set services
 * @param {*} state
 * @param {*} services
 */
export function setServices(state, services) {
  return state.set('services', services);
}

/**
 * Set error to be displayed
 * @param {*} state
 * @param {*} error
 */
export function setError(state, error) {
  return state.set('error', error);
}
