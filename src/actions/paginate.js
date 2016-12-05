import store from '../store';

export function setPage (index) {
  return store.dispatch({type: 'SET_PAGE', pageIndex: index})
}
