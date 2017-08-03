import {REPLACE_ME} from './internal';
import {
  __,
  curry, compose, pipe,
  // Helpers
  inc, add, divide,
} from 'ramda';

// mult :: Number -> Number -> Number
const mult = (a, b) => a * b;

// curriedMult :: Number -> Number -> Number
const curriedMult = curry(mult);

describe('4. functions', () => {
  xdescribe('curry', () => {
    it('takes a function and curries it', () => {
      //
      mult(2).should.be.a('number');
      mult(2).should.be.eql(NaN);
      //
      curriedMult(2).should.be.a('function');
      curriedMult(2)(REPLACE_ME).should.be.a('number');
      curriedMult(REPLACE_ME)(3).should.be.eql(6);
      //
    });
  });
  xdescribe('compose', () => {
    it('will combine two (or more) functions into one', () => {
      compose(inc, REPLACE_ME)(1).should.be.eql(3);
    });
    it('will combine functions from last to first', () => {
      compose(REPLACE_ME, add)(1, 2).should.be.eql(4);
    });
    it('will not preserve the currying properties of the last fn', () => {
      compose(inc, add)(1).should.not.be.a('function');
      compose(inc, add)(1).should.be.eql(NaN);
    });
  });
  xdescribe('pipe', () => {
    it('will combine two (or more) functions into one', () => {
      pipe(inc, inc)(1).should.be.eql(REPLACE_ME);
    });
    it('will combine functions from first to last', () => {
      pipe(add, inc)(1, 2).should.be.eql(REPLACE_ME);
    });
    it('will not preserve the currying properties of the first fn', () => {
      pipe(add, inc)(1).should.not.be.a('function');
      pipe(add, inc)(1).should.be.eql(NaN);
    });
  });
  xdescribe('__ (or placeholder)', () => {
    it('is a value', () => {
      __.should.be.eql({'@@functional/placeholder': true});
    });
    it('can defer the order that arguments are given (2 arg example)', () => {
      divide(__, REPLACE_ME)(6).should.be.eql(3);
    });
    it('can change the order that arguments are given (3 arg example)', () => {
      const fn = curry((a, b, c) => (a + b) * c);
      //
      fn(2, REPLACE_ME, 4).should.be.eql(20);
      //
      fn(__, REPLACE_ME, 4)(2).should.be.eql(20);
      fn(2, __, 4)(REPLACE_ME).should.be.eql(20);
      fn(2, REPLACE_ME, __)(4).should.be.eql(20);
      //
      fn(2, __, __)(REPLACE_ME, 4).should.be.eql(20);
      fn(__, REPLACE_ME, __)(2, 4).should.be.eql(20);
      fn(__, __, 4)(2, REPLACE_ME).should.be.eql(20);
      //
      fn(__, __, __)(2, REPLACE_ME, 4).should.be.eql(20);
    });
  });
});
