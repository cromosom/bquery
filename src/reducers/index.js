const initialState = {
  data: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        data : action.data
      }
    default:
      console.log('No valid reducer type.');
  }
  return state;
}
