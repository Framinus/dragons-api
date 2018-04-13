process.env.NODE_ENV = 'test';

const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const helpers = require('../src/model/helpers');
const app = require('../src/server');

chai.use(chaiHttp);

/* global define, it, describe, before, beforeEach, context */

const databaseReset = function () {
  return helpers.clearAllData()
    .then(() => {
      helpers.seedDragonsTable('red', 1, 10, 20, 10, 7, 'fakeUrl.com/fake.png');
      helpers.seedDragonsTable('purple', 2, 27, 27, 14, 14, 'fakeUrl.com/fake.png');
      helpers.seedDragonsTable('indigo', 3, 32, 32, 15, 16, 'fakeUrl.com/fake.png');
      helpers.seedHumansTable('bob', 1, 10, 10, 10, 10, 'fakeUrl.com/fake.png');
    })
    .catch(console.error);
};

describe('api routes', function () {
  before('reset the database', () => databaseReset());

  describe('/dragons/level/:level', () => {
    let response;
    context('level entered exists', () => {
      before('load the route', () => {
        return chai.request(app)
          .get('/dragons/level/1')
          .then(res => response = res)
      });
      it('returns a status of 200', () => {
        expect(response).to.have.status(200);
      });
      it('returns json', () => {
        expect(response).to.be.json;
      });
    });
    context('level entered does not exist', () => {
      before('load the route', () => {
        return chai.request(app)
          .get('/dragons/level/500')
          .then(res => response = res)
      });
      it('returns a status of 400', () => {
        expect(response).to.have.status(400);
      });
      it('returns json', () => {
        expect(response).to.be.json;
      });
    });
  });

  describe('/dragons/random/:level', () => {
    let response;
    context('level entered exists', () => {
      before('load the route', () => {
        return chai.request(app)
          .get('/dragons/random/1')
          .then(res => response = res)
      });
      it('returns a status of 200', () => {
        expect(response).to.have.status(200);
      });
      it('returns json', () => {
        expect(response).to.be.json;
      });
    });
    context('level entered does not exist', () => {
      before('load the route', () => {
        return chai.request(app)
          .get('/dragons/random/500')
          .then(res => response = res)
      });
      it('returns a status of 400', () => {
        expect(response).to.have.status(400);
      });
      it('returns json', () => {
        expect(response).to.be.json;
      });
    });
  });

  describe('/dragons/create', () => {
    let response;
    before('load the route', () => {
      return chai.request(app)
      .post('/dragons/create')
      .then(res => response = res)
    });
    it('returns a status of 200', () => {
      expect(response).to.have.status(200);
    });
    it('returns json', () => {
      expect(response).to.be.json;
    });
  })

  describe('/humans', () => {
    let response;
    before('load the route', () => {
      return chai.request(app)
        .get('/humans')
        .then(res => response = res);
    });
    it('returns a status of 200', () => {
      expect(response).to.have.status(200);
    });
    it('returns json', () => {
      expect(response).to.be.json;
    });
  });

  describe('/humans/:id', () => {
    let response;
    context('id entered exists', () => {
      before('load the route', () => {
        return chai.request(app)
          .get('/humans/1')
          .then(res => response = res)
      });
      it('returns a status of 200', () => {
        expect(response).to.have.status(200);
      });
      it('returns json', () => {
        expect(response).to.be.json;
      });
    });
    context('id entered does not exist', () => {
      before('load the route', () => {
        return chai.request(app)
          .get('/humans/500')
          .then(res => response = res)
      });
      it('returns a status of 400', () => {
        expect(response).to.have.status(400);
      });
      it('returns json', () => {
        expect(response).to.be.json;
      });
    });
  });
});
