import {REPLACE_ME} from './internal';
import {
  join, concat,
} from 'ramda';

describe('2. strings', () => {
  xdescribe('join', () => {
    it('will join strings together, interspersing the first argument', () => {
      join(',', [REPLACE_ME, 'other thing'])
        .should.be.eql('thing,other thing');
    });
    it('is curried', () => {
      join(',')(['thing', 'other thing'])
        .should.be.eql(REPLACE_ME);
    });
  });
  xdescribe('concat', () => {
    it('only accepts two arguments', () => {
      concat('1', REPLACE_ME, '3').should.be.eql('12');
    });
    it('joins two strings together with no interspersing', () => {
      concat(REPLACE_ME).should.be.eql('thingother thing');
    });
    it('is curried', () => {
      concat('1')(REPLACE_ME).should.be.eql('12');
    });
  });
});
