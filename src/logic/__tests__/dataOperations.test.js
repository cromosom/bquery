import { getAuthor, chunkData, sort, filter } from '../dataOperations';

test('extracts project owner', () => {
  let inputData = {
    'repository_url' : 'https://github.com/facebookincubator/create-react-app/'
  }

  let expected = {
    'repository_url' : 'https://github.com/facebookincubator/create-react-app/',
    author : 'facebookincubator',
  }

  expect(getAuthor(inputData)).toEqual(expected);
});

test('transforms array into chunked array', () => {
  let inputData = [0,1,2,3,4,5,6,7,8,9];
  let expected = [[0,1,2,3,4], [5,6,7,8,9]];

  expect(chunkData(inputData)).toEqual(expected);
});

test('sort data numerical', () => {
  let inputData = [{
    'stars' : 3
  }, {
    'stars' : 1
  }, {
    'stars' : 5
  }];
  let expected = [{
    'stars' : 5
  }, {
    'stars' : 3
  }, {
    'stars' : 1
  }];

  expect(sort(inputData, 'stars')).toEqual(expected);
});

test('sort data alphabetical', () => {
  let inputData = [{
    'name' : 'Ben'
  }, {
    'name' : 'anna'
  }, {
    'name' : 'marie'
  }];
  let expected = [{
    'name' : 'anna'
  }, {
    'name' : 'Ben'
  }, {
    'name' : 'marie'
  }];

  expect(sort(inputData, 'name')).toEqual(expected);
});

test('find name in array', () => {
  let inputData = [{
    'name' : 'Ben'
  }, {
    'name' : 'anna'
  }, {
    'name' : 'marie'
  }];
  let expected = [{
    'name' : 'anna'
  }];

  expect(filter('ann', inputData)).toEqual(expected);
});
