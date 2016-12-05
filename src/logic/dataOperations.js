
export function getAuthor (item) {
  // set author
  item.author = item.repository_url.match(/github\..*\/(.*?)\//)[1];

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

export function sort () {
  
}
