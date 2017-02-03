const app = require('../app');
const { expect } = require('chai');
const request = require('request');

const PORT = 3000;
const URL = 'http://localhost:' + PORT;

let server;
before( done => {
  server = app.listen(PORT || 3000, () => {
    console.log('Listening on port ${PORT || 3000}')
  })
  done();
})

after( done => {
  server.close();
  done();
})

describe('Request', () => {
  describe('\'POST request\'', () => {
    it('should create and return a new note', done => {
      const option = {
        uri: URL + '/notes',
        method: 'POST',
        json: true,
        body: {note:'test'}
      }
      request( option, (err, res, body) => {
        expect(err).to.be.null;
        expect(body).to.be.an('object');
        expect(body.note).to.be.equal('test');
        done();

      })
    })
  })

  describe('\'GET request\'', () => {
    it('should return a list of notes', done => {
      const option = {
        uri: URL + '/notes',
        method: 'GET',
        json: true
      }
      request( option, (err, res, body) => {
        expect(err).to.be.null;
        expect(body).to.be.an('array');
        expect(body.length).to.be.equal(1);
        done();
      })
    })
  })

  describe('\'GET ID request\'', () => {

    it('should return note with ID', done => {
      const option = {
        method: 'GET',
        json: true
      }
      request( URL + '/notes/1', option, (err, res, body) => {
        expect(err).to.be.null;
        expect(body).to.be.an('object');
        expect(body).to.have.property('note');
        done();
      })
    })
    it('should return null when ID does not exist', done => {
      const option = {
        method: 'GET',
        json: true
      }
      request( URL + '/notes/2', option, (err, res, body) => {
        expect(body).to.be.eql({});
        done();
      })
    })
  })

})
