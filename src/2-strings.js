import {
  join, concat,
} from 'ramda';

describe('2. strings', () => {
  describe('join', () => {
    it('will join strings together, interspersing the first argument', () => {
      join(',', ['thing', 'other thing'])
        .should.be.eql('thing,other thing');
    });
    it('is curried', () => {
      join(',')(['thing', 'other thing'])
        .should.be.eql('thing,other thing');
    });
  });
  describe('concat', () => {
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
