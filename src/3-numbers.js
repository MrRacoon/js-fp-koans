import {REPLACE_ME} from './internal';
import {
  inc, dec,
  negate,
  add, subtract,
  multiply, divide,
} from 'ramda';

describe('3. numbers', () => {
  xdescribe('inc', () => {
    it('increments values by one', () => {
      inc(REPLACE_ME).should.be.eql(2);
      inc(2).should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('dec', () => {
    it('decrements values by one', () => {
      dec(REPLACE_ME).should.be.eql(0);
      dec(2).should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('negate', () => {
    it('returns the negation of the given value', () => {
      negate(REPLACE_ME).should.be.eql(-2);
      negate(4).should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('add', () => {
    it('adds two numbers', () => {
    add(REPLACE_ME, 2).should.be.eql(3);
    });
    it('is curried', () => {
      add(1)(REPLACE_ME).should.be.eql(3);
    });
  });
  xdescribe('subtract', () => {
    it('subtracts the second number from the first', () => {
      subtract(2, REPLACE_ME).should.be.eql(-3);
      subtract(5, 1).should.be.eql(REPLACE_ME);
    });
    it('is curried', () => {
      subtract(2)(REPLACE_ME).should.be.eql(-3);
    });
  });
  xdescribe('multiply', () => {
    it('multiplies two numbers together', () => {
      multiply(2, REPLACE_ME).should.be.eql(10);
    });
    it('is curried', () => {
      multiply(2)(5).should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('divide', () => {
    it('divides the first number by the second', () => {
      divide(REPLACE_ME, 2).should.be.eql(3);
    });
    it('is curried', () => {
      divide(6)(REPLACE_ME).should.be.eql(3);
    });
  });
});
