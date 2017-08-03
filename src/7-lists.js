import {REPLACE_ME} from './internal';
import {
  // helpers
  prop, propEq, always,
  // sut
  head, tail,
  init, last,
  length,
  map, filter, reduce,
  adjust,
} from 'ramda';

const data = [
  {name: 'pepsi', type: 'soda'},
  {name: 'coke', type: 'soda'},
  {name: 'oj', type: 'juice'},
];

// getName :: { String: a } -> a
const getName = prop(REPLACE_ME); // eslint-disable-line

// isSoda :: { String: a } -> Bool
const isSoda = propEq('type', REPLACE_ME); // eslint-disable-line

describe('7. lists', () => {
  xdescribe('head', () => {
    it('should take the first item in a list', () => {
      head(data).should.be.eql({name: REPLACE_ME, type: 'soda'});
    });
    it('returns undefined when given an empty list', () => {
      expect(head([])).to.be.eql(REPLACE_ME);
    });
  });
  xdescribe('tail', () => {
    it('should take everything but the first item in a list', () => {
      tail(data).should.be.eql([
        {name: REPLACE_ME, type: 'soda'},
        {name: 'oj', type: 'juice'},
      ]);
    });
    it('returns an empty list when given an empty list', () => {
      tail([]).should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('init', () => {
    it('returns everything but the last value', () => {
      init(data).should.be.eql([
        {name: 'pepsi', type: 'soda'},
        {name: 'coke', type: 'soda'},
      ]);
    });
    it('returns an empty list when given an empty list', () => {
      init(REPLACE_ME).should.be.eql([]);
    });
  });
  xdescribe('last', () => {
    it('returns the last element of a list', () => {
      last(data).should.be.eql(REPLACE_ME);
    });
    it('returns an empty list when given an empty list', () => {
      expect(last([])).to.be.eql(REPLACE_ME);
    });
  });
  xdescribe('length', () => {
    it('returns the length of the list', () => {
      length(data).should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('map', () => {
    it('applies a function to every member of a list', () => {
      map(REPLACE_ME, data).should.be.eql([
        'pepsi', 'coke', 'oj',
      ]);
    });
    it('is curried', () => {
      map(REPLACE_ME)(data).should.be.eql([
        'pepsi', 'coke', 'oj',
      ]);
    });
  });
  xdescribe('filter', () => {
    it('will only keep items that return true for the predicate', () => {
      filter(REPLACE_ME, data).should.be.eql([
        {name: 'pepsi', type: 'soda'},
        {name: 'coke', type: 'soda'},
      ]);
    });
    it('is curried', () => {
      filter(REPLACE_ME)(data).should.be.eql([
        {name: 'pepsi', type: 'soda'},
        {name: 'coke', type: 'soda'},
      ]);
    });
  });
  xdescribe('reduce', () => {
    const incSodaCount = (count, drink) => drink.type === 'soda'
      ? count + 1
      : count;
    it('will accumulate a value, by traversing a list', () => {
      reduce(incSodaCount, 0, data).should.be.eql(REPLACE_ME);
    });
    it('is curried', () => {
      reduce(REPLACE_ME)(0, data).should.be.eql(2);
      reduce(REPLACE_ME, 0)(data).should.be.eql(2);
      reduce(REPLACE_ME)(0)(data).should.be.eql(2);
    });
  });
  xdescribe('adjust', () => {
    it('will save a value at a given index of a list', () => {
      adjust(always(9), 2, [1, 2, 3, 4, 5])
        .should.be.eql([1, 2, REPLACE_ME, 4, 5]);
    });
    it('is curried', () => {
      adjust(always(9))(2, [1, 2, 3, 4, 5])
        .should.be.eql([1, 2, REPLACE_ME, 4, 5]);

      adjust(always(9), 2)([1, 2, 3, 4, 5])
        .should.be.eql([1, 2, REPLACE_ME, 4, 5]);

      adjust(always(9))(2)([1, 2, 3, 4, 5])
        .should.be.eql([1, 2, REPLACE_ME, 4, 5]);
    });
  });
});
