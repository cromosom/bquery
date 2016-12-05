import store from '../store';
import { call } from '../logic/callApi';
import { getAuthor } from '../logic/dataOperations';

export function fetchData (query) {

  call(query)
    .then( (response) => {
      let preparedData = response.data.map(getAuthor);
      // preparedData = chunkData(preparedData);

      return store.dispatch({type: 'RECEIVE_DATA', data: preparedData});
    })
    .catch( (err) => {
      console.log(err);
    });

}
