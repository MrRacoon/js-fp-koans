import {
  join, concat,
} from 'ramda';

describe('2-Strings', () => {
  describe('The "join" function', () => {
    it('will join strings together, interspersing the first argument', () => {
      join(',', ['thing', 'other thing'])
        .should.be.eql('thing,other thing');
    });
  });
  describe('The "concat" function', () => {
    it('only accepts two arguments', () => {
      concat('1', '2', '3').should.be.eql('12');
    });
    it('joins two strings together with no interspersing', () => {
      concat('thing', 'other thing').should.be.eql('thingother thing');
    });
    it('is curried', () => {
      concat('1')('2').should.be.eql('12');
    });
  });
});
