import { call } from '../callApi';


it('is an asyn request', () => {
  return call('js').then( resp => {
    expect(resp.data).toBeDefined();
  });
})
