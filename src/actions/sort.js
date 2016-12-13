import store from '../store';
import { sort } from '../logic/dataOperations';

//dispatches sorted data object
export function sortData (data, sortParam) {
  let sortedArray = sort(data, sortParam);

  return store.dispatch({type: 'SORT_DATA', sortedData: sortedArray});
}
