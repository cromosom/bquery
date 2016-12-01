import axios from 'axios';

export function call (query) {

  return axios.get('https://libraries.io/api/bower-search', {
    params : {
      q : query
    }
  });

}
