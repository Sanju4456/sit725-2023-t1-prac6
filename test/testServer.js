const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Assuming your server file is one directory above the test folder
const expect = chai.expect;

// Configure chai
chai.use(chaiHttp);

// Test cases for API endpoints
describe('API Tests', () => {
  describe('GET /', () => {
    it('should return status 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('POST /api/cards', () => {
    it('should insert data and return status 201', (done) => {
      chai.request(app)
        .post('/api/cards')
        .send({ first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: '123456' })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.text).to.equal('Data inserted successfully');
          done();
        });
    });
  });

  describe('GET /api/formDetails', () => {
    it('should return status 200 and input data as JSON', (done) => {
      chai.request(app)
        .get('/api/formDetails')
        .query({ key: 'value' }) // Example query parameters
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('This is the input data you requested');
          expect(res.body.data).to.deep.equal({ key: 'value' }); // Example expected query parameters
          done();
        });
    });
  });

  // Add more test cases for other API endpoints if needed
});
