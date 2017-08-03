import {REPLACE_ME} from './internal';
import {
  not, and, or,
} from 'ramda';
// import __ from './internal/placeholder';

describe('1. booleans', () => {
  xdescribe('not', () => {
    it('can invert boolean values', () => {
      //
      not(REPLACE_ME).should.be.eql(false);
      not(REPLACE_ME).should.be.eql(true);
      //
    });
  });
  xdescribe('and', () => {
    it('is the function equivalent for `&&` operations', () => {
      //
      (true && REPLACE_ME).should.be.eql(true);
      and(REPLACE_ME, true).should.be.eql(true);
      and(true)(REPLACE_ME).should.be.eql(true);
      //
      (true && REPLACE_ME).should.be.eql(false);
      and(true, REPLACE_ME).should.be.eql(false);
      and(REPLACE_ME)(false).should.be.eql(false);
      //
    });
    it('is curried', () => {
      and(false)(REPLACE_ME).should.be.eql(false);
    });
  });
  xdescribe('or', () => {
    it('is the function equivalent for `||` operations', () => {
      //
      (REPLACE_ME || true).should.be.eql(true);
      or(REPLACE_ME, true).should.be.eql(true);
      or(REPLACE_ME)(true).should.be.eql(true);
      //
      (REPLACE_ME || false).should.be.eql(true);
      or(REPLACE_ME, false).should.be.eql(true);
      or(REPLACE_ME)(false).should.be.eql(true);
      //
    });
    it('can be used to default to a value', () => {
      //
      or('value', REPLACE_ME).should.be.eql('value');
      or(false, REPLACE_ME).should.be.eql('some default value');
      //
    });
    it('is curried', () => {
      or(false)(REPLACE_ME).should.be.eql(true);
    });
  });
});
