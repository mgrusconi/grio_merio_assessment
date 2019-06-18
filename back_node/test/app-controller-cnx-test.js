
require('chai/register-should');
const request = require('supertest');
const app = require('../server/middlewares/express');

describe('App Controller Conection Method', () => {

  it('Successful GET Resource ', (done) => {
    request(app)
      .get('/app/github/symfony/repos')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body[0].should.have.property('avatar');
        res.body[0].avatar.should.equal('https://avatars3.githubusercontent.com/u/143937?v=4');
        done();
      });
  });

  it('Endpoint not implementation', (done) => {   
    request(app)
      .get('/app/github/symfony/events')
      .expect('Content-Type', /json/)
      .expect(501)
      .end((err, res) => {
        should.not.exist(err);
        res.body.message.should.equal('To Do Implementation');
        done();
      });
  });

});