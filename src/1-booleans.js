import {and, or} from 'ramda';
// import __ from './internal/placeholder';

describe('The "and" function', () => {
  it('is a function for && operations', () => {
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
});

describe('The "or" function', () => {
  it('is a function for || operations', () => {
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
});
