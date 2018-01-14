const expect = require('chai').expect;
const queries = require('../src/model/queries');
const helpers = require('../src/model/helpers');

/* global define, it, describe, before, beforeEach */

describe('createDragon function', function () {
  before(function () {
    return helpers.clearAllDragons()
      .then(() => {
        helpers.seedDatabase("Fred", 2, "ice breath");
      })
      .catch(console.error);
  });
  it('adds a dragon to the database', function () {
    return queries.createDragon('harry', 3, 'fire breath')
      .then((dragon) => {
        expect(dragon.name).to.eql('harry');
      });
  });
});
