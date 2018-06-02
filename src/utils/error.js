import { store } from '../redux/store';

export default function setError(error) {
  store.dispatch({
    type: 'SET_ERROR',
    error,
  });
}
