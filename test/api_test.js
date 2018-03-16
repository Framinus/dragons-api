process.env.NODE_ENV = 'test';
console.log('node env in test file', process.env.NODE_ENV);

const expect = require('chai').expect;
const queries = require('../src/model/queries');
const helpers = require('../src/model/helpers');
/* global define, it, describe, before, beforeEach */

describe('createDragon function', function () {
  before(function () {
    return helpers.clearAllDragons()
      .then(() => {
        helpers.seedDatabase('red', 10, 20, 10, 7, 'fakeUrl.com/fake.png');
      })
      .catch(console.error);
  });
  it('adds a dragon to the database', function () {
    return queries.createDragon('blue', 5, 30, 5, 15, 'fakeUrl.com/fake.png')
      .then((dragon) => {
        expect(dragon.type).to.eql('blue');
      });
  });
});
