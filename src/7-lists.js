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
const getName = prop('name');

// isSoda :: { String: a } -> Bool
const isSoda = propEq('type', 'soda');

describe('7. lists', () => {
  describe('basic operations', () => {
    describe('head', () => {
      it('should take the first item in a list', () => {
        head(data).should.be.eql({name: 'pepsi', type: 'soda'});
      });
      it('returns undefined when given an empty list', () => {
        expect(head([])).to.be.eql(undefined);
      });
    });
    describe('tail', () => {
      it('should take everything but the first item in a list', () => {
        tail(data).should.be.eql([
          {name: 'coke', type: 'soda'},
          {name: 'oj', type: 'juice'},
        ]);
      });
      it('returns an empty list when given an empty list', () => {
        tail([]).should.be.eql([]);
      });
    });
    describe('init', () => {
      it('returns everything but the last value', () => {
        init(data).should.be.eql([
          {name: 'pepsi', type: 'soda'},
          {name: 'coke', type: 'soda'},
        ]);
      });
      it('returns an empty list when given an empty list', () => {
        init([]).should.be.eql([]);
      });
    });
    describe('last', () => {
      it('returns the last element of a list', () => {
        last(data).should.be.eql({name: 'oj', type: 'juice'});
      });
      it('returns an empty list when given an empty list', () => {
        expect(last([])).to.be.eql(undefined);
      });
    });
    describe('length', () => {
      it('returns the length of the list', () => {
        length(data).should.be.eql(3);
      });
    });
  });
  describe('higher order ops', () => {
    describe('map', () => {
      it('applies a function to every member of a list', () => {
        map(getName, data).should.be.eql([
          'pepsi', 'coke', 'oj',
        ]);
      });
      it('is curried', () => {
        map(getName)(data).should.be.eql([
          'pepsi', 'coke', 'oj',
        ]);
      });
    });
    describe('filter', () => {
      it('will only keep items that return true for the predicate', () => {
        filter(isSoda, data).should.be.eql([
          {name: 'pepsi', type: 'soda'},
          {name: 'coke', type: 'soda'},
        ]);
      });
      it('is curried', () => {
        filter(isSoda)(data).should.be.eql([
          {name: 'pepsi', type: 'soda'},
          {name: 'coke', type: 'soda'},
        ]);
      });
    });
    describe('reduce', () => {
      const incSodaCount = (count, drink) => drink.type === 'soda'
        ? count + 1
        : count;
      it('will accumulate a value, by traversing a list', () => {
        reduce(incSodaCount, 0, data).should.be.eql(2);
      });
      it('is curried', () => {
        reduce(incSodaCount)(0, data).should.be.eql(2);
        reduce(incSodaCount, 0)(data).should.be.eql(2);
        reduce(incSodaCount)(0)(data).should.be.eql(2);
      });
    });
    describe('adjust', () => {
      it('will save a value at a given index of a list', () => {
        adjust(always(9), 2, [1, 2, 3, 4, 5])
          .should.be.eql([1, 2, 9, 4, 5]);
      });
      it('is curried', () => {
        adjust(always(9))(2, [1, 2, 3, 4, 5]).should.be.eql([1, 2, 9, 4, 5]);
        adjust(always(9), 2)([1, 2, 3, 4, 5]).should.be.eql([1, 2, 9, 4, 5]);
        adjust(always(9))(2)([1, 2, 3, 4, 5]).should.be.eql([1, 2, 9, 4, 5]);
      });
    });
  });
});
