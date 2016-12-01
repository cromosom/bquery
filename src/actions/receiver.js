import store from '../store';
import { call } from '../logic/call';

export function fetchData () {
  let data = call();
  console.log(data);
  return store.dispatch({type: 'RECEIVE_DATA'});
}
