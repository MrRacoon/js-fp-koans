import {
  equals,
  isNil,
  // isEmpty,
  // eqProps, whereEq,
} from 'ramda';

describe('5-predicates', () => {
  describe('equals', () => {
    it('will check two values to see if they are equal', () => {
      equals(1, 1).should.be.eql(true);
      equals(1, 2).should.be.eql(false);
    });
    it('does not type cast any of the variables', () => {
      equals(1, '1').should.be.eql(false);
    });
  });
  describe('isNil', () => {
    it('returns true when given null', () => {
      isNil(null).should.be.eql(true);
    });
    it('returns true when given undefined', () => {
      isNil(undefined).should.be.eql(true);
    });
    it('returns false when given anything else', () => {
      isNil(false).should.be.eql(false);
      isNil(NaN).should.be.eql(false);
      isNil(0).should.be.eql(false);
    });
  });
});
