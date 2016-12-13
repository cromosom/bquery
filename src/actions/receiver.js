import store from '../store';
import { call } from '../logic/callApi';
import { getAuthor } from '../logic/dataOperations';

//dispatches data object returned form bower
export function fetchData (query) {

  call(query)
    .then( (response) => {
      let preparedData = response.data.map(getAuthor);
      let spinner = document.getElementById('spinner');

      spinner.classList.remove('is--active');

      return store.dispatch({type: 'RECEIVE_DATA', data: preparedData});
    })
    .catch( (err) => {
      console.log(err);
    });

}
