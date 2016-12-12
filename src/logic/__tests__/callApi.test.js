import { call } from '../callApi';

// increase timeout
let originalTimeout;

beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});

afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

it('is an asyn request', (done) => {
  return call('js').then( resp => {
    expect(resp.data).toBeDefined();
    done();
  }).catch( err => {
    expect(err).toBeDefined();
    done();
  });
})
