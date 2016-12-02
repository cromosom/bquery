
export function prepareData (item) {
  // set author
  item.author = item.repository_url.match(/github\..*\/(.*?)\//)[1];

  return item;
}
