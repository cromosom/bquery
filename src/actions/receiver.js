import store from '../store';
import { call } from '../logic/call';

export function fetchData (query) {
  
  call(query)
    .then( (response) => {
      console.log(response);
      return store.dispatch({type: 'RECEIVE_DATA'});
    })
    .catch( (err) => {
      console.log(err);
    });

}
