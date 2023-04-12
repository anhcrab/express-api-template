import {
  server,
  BASE_URL
} from './setup.js';

describe('Index page test', () => {
  test('gets base URL', (done) => {
    server
      .get(`${BASE_URL}/`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.test).toBe('Environment variable is comming across');
        done();
      });
  });
});
