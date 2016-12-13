import store from '../store';

//dispatches current page
export function setPage (index) {
  return store.dispatch({type: 'SET_PAGE', pageIndex: index})
}
