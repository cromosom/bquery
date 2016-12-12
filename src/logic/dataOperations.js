
export function getAuthor (item) {
  // set author
  item.author = item.repository_url.match(/((git@|https:\/\/)([\w\.@]+)(\/|:))([\w,\-,_]+)\/([\w,\-,_]+)\//)[5];

  return item;
}

export function chunkData (dataSet) {
  let chunks = [];
  let chunkSize = 5;

  for (let i = 0; i < dataSet.length; i += chunkSize) {
    chunks.push(dataSet.slice(i, i + chunkSize));
  }

  return chunks;
}

export function sort (data, field) {

  let sorted;

  if (field === 'name' || field === 'author') {
    sorted = data.sort(compareStrings.bind(this, field));
  } else {
    sorted = data.sort(compareValues.bind(this, field));
  }

  return sorted;

}

export function compareValues (field, a, b) {
  if (a[field] > b[field]) {
    return -1;
  }
  if (a[field] < b[field]) {
    return 1;
  }

  return 0;
}

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

export function filter (query, dataSet) {

  let filteredData = dataSet.filter((item) => (
    item.name.indexOf(query) !== -1
  ))

  return filteredData;
}
