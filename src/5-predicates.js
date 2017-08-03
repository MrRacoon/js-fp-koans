import {REPLACE_ME} from './internal';
import {
  equals,
  isNil,
  // isEmpty,
  // eqProps, whereEq,
} from 'ramda';

describe('5. predicates', () => {
  xdescribe('equals', () => {
    it('will check two values to see if they are equal', () => {
      equals(1, REPLACE_ME).should.be.eql(true);
      equals(1, 2).should.be.eql(REPLACE_ME);
    });
    it('does not type cast any of the variables', () => {
      equals(1, '1').should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('isNil', () => {
    it('returns true when given null', () => {
      isNil(null).should.be.eql(REPLACE_ME);
    });
    it('returns true when given undefined', () => {
      isNil(undefined).should.be.eql(REPLACE_ME);
    });
    it('returns false when given anything else', () => {
      isNil(false).should.be.eql(REPLACE_ME);
      isNil(NaN).should.be.eql(REPLACE_ME);
      isNil(0).should.be.eql(REPLACE_ME);
    });
  });
});
