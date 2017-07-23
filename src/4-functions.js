import {
  curry,
  compose,
  pipe,
  __,

  // Helpers
  inc,
  add,
  divide,
} from 'ramda';


describe('4. functions', () => {
  describe('curry', () => {
    it('takes a function and curries it', () => {
      const mult = (a, b) => a * b;
      const curriedMult = curry(mult);
      //
      mult(2).should.be.a('number');
      mult(2).should.be.eql(NaN);
      //
      curriedMult(2).should.be.a('function');
      curriedMult(2)(3).should.be.a('number');
      curriedMult(2)(3).should.be.eql(6);
      //
    });
  });
  describe('compose', () => {
    it('will combine two (or more) functions into one', () => {
      compose(inc, inc)(1).should.be.eql(3);
    });
    it('will combine functions from last to first', () => {
      compose(inc, add)(1, 2).should.be.eql(4);
    });
    it('will not preserve the currying properties', () => {
      compose(inc, add)(1).should.not.be.a('function');
      compose(inc, add)(1).should.be.eql(NaN);
    });
  });
  describe('pipe', () => {
    it('will combine two (or more) functions into one', () => {
      pipe(inc, inc)(1).should.be.eql(3);
    });
    it('will combine functions from first to last', () => {
      pipe(add, inc)(1, 2).should.be.eql(4);
    });
    it('will not preserve the currying properties', () => {
      pipe(add, inc)(1).should.not.be.a('function');
      pipe(add, inc)(1).should.be.eql(NaN);
    });
  });
  describe('__ (or placeholder)', () => {
    it('a value', () => {
      __.should.be.eql({'@@functional/placeholder': true});
    });
    it('can defer the order that arguments are given (2 arg example)', () => {
      divide(__, 2)(6).should.be.eql(3);
    });
    it('can change the order that arguments are given (3 arg example)', () => {
      const fn = curry((a, b, c) => (a + b) * c);
      //
      fn(2, 3, 4).should.be.eql(20);
      //
      fn(__, 3, 4)(2).should.be.eql(20);
      fn(2, __, 4)(3).should.be.eql(20);
      fn(2, 3, __)(4).should.be.eql(20);
      //
      fn(2, __, __)(3, 4).should.be.eql(20);
      fn(__, 3, __)(2, 4).should.be.eql(20);
      fn(__, __, 4)(2, 3).should.be.eql(20);
      //
      fn(__, __, __)(2, 3, 4).should.be.eql(20);
    });
  });
});
