import {
  not, and, or,
} from 'ramda';
// import __ from './internal/placeholder';

describe('1. booleans', () => {
  describe('not', () => {
    it('can invert boolean values', () => {
      //
      not(true).should.be.eql(false);
      not(false).should.be.eql(true);
      //
    });
  });
  describe('and', () => {
    it('is the function equivalent for `&&` operations', () => {
      //
      (true && true).should.be.eql(true);
      and(true, true).should.be.eql(true);
      and(true)(true).should.be.eql(true);
      //
      (true && false).should.be.eql(false);
      and(true, false).should.be.eql(false);
      and(true)(false).should.be.eql(false);
      //
    });
    it('is curried', () => {
      and(false)(true).should.be.eql(false);
    });
  });
  describe('or', () => {
    it('is the function equivalent for `||` operations', () => {
      //
      (true || true).should.be.eql(true);
      or(true, true).should.be.eql(true);
      or(true)(true).should.be.eql(true);
      //
      (true || false).should.be.eql(true);
      or(true, false).should.be.eql(true);
      or(true)(false).should.be.eql(true);
      //
    });
    it('can be used to default to a value', () => {
      //
      or('value', 'some default value').should.be.eql('value');
      or(false, 'some default value').should.be.eql('some default value');
      //
    });
    it('is curried', () => {
      or(false)(true).should.be.eql(true);
    });
  });
});
