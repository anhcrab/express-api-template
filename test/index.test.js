import {
  expect, 
  server,
  BASE_URL
} from './setup.js';

describe('Index page test', () => {
  it('gets base URL', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end( (err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.test).to.equal('Environment variable is comming across');
        done();
      });
  });
});
