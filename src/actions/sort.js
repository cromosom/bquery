import store from '../store';
import { sort } from '../logic/dataOperations';

export function sortData (data, sortParam) {
  let sortedArray = sort(data, sortParam);

  return store.dispatch({type: 'SORT_DATA', sortedData: sortedArray});
}
