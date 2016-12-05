const initialState = {
  data: [],
  pageIndex: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        ...state,
        data : action.data
      }
    case 'SET_PAGE':
      return {
        ...state,
        pageIndex : action.pageIndex
      }
    default:
      console.log('No valid reducer type.');
  }
  return state;
}
