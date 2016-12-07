const initialState = {
  fetchedData: [],
  renderData: [],
  pageIndex: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        ...state,
        fetchedData : action.data,
        renderData : action.data
      }
    case 'SORT_DATA':
      let sortedData = action.sortedData.map((item) => (item));

      return {
        ...state,
        renderData : sortedData
      }
    case 'FILTER_DATA':
      let filteredData = action.filteredData.map((item) => (item));

      return {
        ...state,
        renderData : filteredData
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
