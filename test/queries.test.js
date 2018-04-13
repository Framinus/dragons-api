process.env.NODE_ENV = 'test';
console.log('process.env', process.env.NODE_ENV);

const { expect } = require('chai');
const queries = require('../src/model/queries');
const helpers = require('../src/model/helpers');
/* global define, it, describe, before, beforeEach */

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

describe('createDragon function', function () {
  before(() => databaseReset());
  it('adds a dragon to the database', function () {
    return queries.createDragon('blue', 1, 5, 30, 5, 15, 'fakeUrl.com/fake.png')
      .then((dragon) => {
        expect(dragon.type).to.eql('blue');
      });
  });
  it('adds a dragon to the database and increases the length of the total list', function () {
    return queries.createDragon('yellow', 1, 10, 20, 10, 10, 'fakeUrl.com/fake.png')
      .then(() => {
        return queries.listAllDragonsByLevel(1)
          .then((dragons) => {
            expect(dragons.length).to.eql(3);
          });
      });
  });
});

describe('listAllDragonsByLevel', function () {
  before(() => databaseReset());
  it('retrieves all dragons equaling level 1 from the database', function () {
    return queries.listAllDragonsByLevel(1)
      .then((dragons) => {
        expect(dragons.length).to.eql(1);
      });
  });
  it('retrieves a level 1 dragon of type "red"', function () {
    return queries.listAllDragonsByLevel(1)
      .then((dragons) => {
        expect(dragons[0].type).to.eql('red');
      });
  });
  it('retrieves all dragons equaling level 2 from the database', function () {
    return queries.listAllDragonsByLevel(2)
      .then((dragons) => {
        expect(dragons.length).to.eql(1);
      });
  });
  it('retrieves a level 2 dragon of type "purple"', function () {
    return queries.listAllDragonsByLevel(2)
      .then((dragons) => {
        expect(dragons[0].type).to.eql('purple');
      });
  });
  it('retrieves all dragons equaling level 3 from the database', function () {
    return queries.listAllDragonsByLevel(3)
      .then((dragons) => {
        expect(dragons.length).to.eql(1);
      });
  });
  it('retrieves a level 3 dragon of type "indigo"', function () {
    return queries.listAllDragonsByLevel(3)
      .then((dragons) => {
        expect(dragons[0].type).to.eql('indigo');
      });
  });
});

describe('listDragonById', function () {
  before(() => databaseReset());
  it('retrieves a dragon matching the given id from the database', function () {
    const testId = 1;
    return queries.listDragonById(testId)
      .then((dragon) => {
        expect(dragon.type).to.eql('red');
      });
  });
});

describe('deleteDragonById', function () {
  before(() => databaseReset());
  it('deletes a dragon corresponding to the given id', function () {
    const testId = 1;
    return queries.deleteDragonById(testId)
      .then(() => {
        return queries.listAllDragonsByLevel(1)
          .then((dragons) => {
            expect(dragons.length).to.eql(0);
          });
      });
  });
});

describe('listHumanById', function () {
  before(() => databaseReset());
  it('retrieves a human matching the given id from the database', function () {
    const testId = 1;
    return queries.listHumanById(testId)
      .then((human) => {
        expect(human.type).to.eql('bob');
      });
  });
});

describe('listAllHumans', function () {
  before(() => databaseReset());
  it('retrieves a list of all humans from the human table', function () {
    return queries.listAllHumans()
      .then((humans) => {
        expect(humans.length).to.eql(1);
      });
  });
});
