const app = require('./App.ts');
const request = require('supertest');

describe('HTTP Server testing...', () => {

  it("Just testing...", () => {
    expect(1).toBe(1);
  });


  it('Should return 404 Not Found for error', async () => {
    await(app)
    .req(app !== '/api/v1/sysinfo')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)
    .toBe('404 Not Found');
  });


  it('Should make a request to the server...',  async () => {
    await request(app)
        .get('/api/v1/sysinfo')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          //console.log("response: ", response)
          //TODO: Faire tous les test suplementaires ici....
        })
 });

});


