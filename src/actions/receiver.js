import store from '../store';
import { call } from '../logic/callApi';

export function fetchData (query) {

  call(query)
    .then( (response) => {
      return store.dispatch({type: 'RECEIVE_DATA', data: response.data});
    })
    .catch( (err) => {
      console.log(err);
    });

}
