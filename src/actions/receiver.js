import store from '../store';
import { call } from '../logic/callApi';
import { prepareData, chunkData } from '../logic/prepareData';

export function fetchData (query) {

  call(query)
    .then( (response) => {
      let preparedData = response.data.map(prepareData);
      preparedData = chunkData(preparedData);
      return store.dispatch({type: 'RECEIVE_DATA', data: preparedData});
    })
    .catch( (err) => {
      console.log(err);
    });

}
