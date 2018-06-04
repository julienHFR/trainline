import { Map, fromJS } from 'immutable';

import data from './data';
import makeStore from '../../src/redux/store';
import { INITIAL_STATE } from '../../src/redux/actions';

describe('epg store', () => {
  it('retrieving store', () => {
    const store = makeStore();
    expect(store.getState()).toEqual(INITIAL_STATE);
  });

  it('handle setServices', () => {
    const store = makeStore();
    store.dispatch({ type: 'SET_SERVICES', services: data.servicesInput });
    expect(store.getState()).toEqual(data.servicesOutput);
  });

  it('handle setCallings', () => {
    const store = makeStore();
    store.dispatch({
      type: 'SET_CALLINGS',
      callings: data.callingsInput,
      url: 'https://realtime.thetrainline.com/callingPattern/W10800/2018-06-03',
    });
    expect(store.getState()).toEqual(data.callingsOutput);
  });

  it('handle setError', () => {
    const store = makeStore();
    store.dispatch({ type: 'SET_ERROR', error: data.errorInput });
    expect(store.getState()).toEqual(data.errorOutput);
  });
});
