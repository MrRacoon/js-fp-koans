import {
  inc, dec,
  negate,
  add, subtract,
  multiply, divide,
} from 'ramda';

describe('3. numbers', () => {
  describe('inc', () => {
    it('increments values by one', () => {
      inc(1).should.be.eql(2);
      inc(2).should.be.eql(3);
    });
  });
  describe('dec', () => {
    it('decrements values by one', () => {
      dec(1).should.be.eql(0);
      dec(2).should.be.eql(1);
    });
  });
  describe('negate', () => {
    it('returns the negation of the given value', () => {
      negate(2).should.be.eql(-2);
      negate(4).should.be.eql(-4);
    });
  });
  describe('add', () => {
    it('adds two numbers', () => {
      add(1, 2).should.be.eql(3);
    });
    it('is curried', () => {
      add(1)(2).should.be.eql(3);
    });
  });
  describe('subtract', () => {
    it('subtracts the second number from the first', () => {
      subtract(2, 5).should.be.eql(-3);
      subtract(5, 1).should.be.eql(4);
    });
    it('is curries', () => {
      subtract(2)(5).should.be.eql(-3);
    });
  });
  describe('multiply', () => {
    it('multiplies two numbers together', () => {
      multiply(2, 5).should.be.eql(10);
    });
    it('is curried', () => {
      multiply(2)(5).should.be.eql(10);
    });
  });
  describe('divide', () => {
    it('divides the first number by the second', () => {
      divide(6, 2).should.be.eql(3);
    });
    it('is curried', () => {
      divide(6)(2).should.be.eql(3);
    });
  });
});
