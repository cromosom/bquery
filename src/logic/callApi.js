import axios from 'axios';

/**
 * request to bower api
 * @param  {string} query query string
 * @return {object}       results
 */
export function call (query) {

  return axios.get('https://libraries.io/api/bower-search', {
    params : {
      q : query
    }
  });

}
