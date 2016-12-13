import store from '../store';
import { filter } from '../logic/dataOperations';

//dispatches filtering
export function filterData (query, data) {
  let filteredArray = filter(query, data);

  return store.dispatch({type: 'FILTER_DATA', filteredData: filteredArray});
}
