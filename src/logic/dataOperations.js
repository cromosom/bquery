/**
 * extracts project author form git url
 * @param  {object} item package-object
 * @return {object}      package-object with author
 */
export function getAuthor (item) {
  // set author
  item.author = item.repository_url.match(/((git|https:\/\/)([\w\.@]+)(\/|:))([\w,\-,_]+)\/([\w,\-,_]+)/)[5];

  return item;
}

/**
 * splits data into array-chungs of 5 objects
 * @param  {array} dataSet
 * @return {array}
 */
export function chunkData (dataSet) {
  let chunks = [];
  let chunkSize = 5;

  for (let i = 0; i < dataSet.length; i += chunkSize) {
    chunks.push(dataSet.slice(i, i + chunkSize));
  }

  return chunks;
}

/**
 * sorts data alphabetical or numerical
 * @param  {array} data
 * @param  {string} field expects 'name', 'author' or 'stars'
 * @return {array}
 */
export function sort (data, field) {

  let sorted;

  if (field === 'name' || field === 'author') {
    sorted = data.sort(compareStrings.bind(this, field));
  } else {
    sorted = data.sort(compareValues.bind(this, field));
  }

  return sorted;

}

/**
 * compares numerical values
 * @param  {string} field
 * @param  {number} a
 * @param  {number} b
 * @return {number}
 */
export function compareValues (field, a, b) {
  if (a[field] > b[field]) {
    return -1;
  }
  if (a[field] < b[field]) {
    return 1;
  }

  return 0;
}

/**
 * compares strings
 * @param  {string} field
 * @param  {string} a
 * @param  {string} b
 * @return {number}
 */
export function compareStrings (field, a, b) {

  let nameA = a[field].toUpperCase();
  let nameB = b[field].toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

/**
 * filters data array
 * @param  {string} query  string to filter for
 * @param  {array} dataSet
 * @return {array}         filtered array
 */
export function filter (query, dataSet) {

  let filteredData = dataSet.filter((item) => (
    item.name.indexOf(query) !== -1
  ))

  return filteredData;
}
