import {REPLACE_ME} from './internal';
import {
  prop, whereEq, propEq,
  map, filter, compose,
  length,
} from 'ramda';

let data = [
  {
    name: 'apple',
    type: 'fruit',
  },
  {
    name: 'orange',
    type: 'fruit',
  },
  {
    name: 'asparagus',
    type: 'vegetable',
  },
];

// getName :: { String: a } -> a
const getName = prop(REPLACE_ME); // eslint-disable-line

// isFruit :: { String: a } -> Bool
const isFruit = whereEq({type: REPLACE_ME}); // eslint-disable-line

// isVegetable :: { String: a } -> Bool
const isVegetable = propEq('type', REPLACE_ME); // eslint-disable-line

describe('6. higher order functions', () => {
  xit('is any function that takes a function', () => {
    //
    filter(REPLACE_ME, data)
      .should.be.eql([
        {name: 'apple', type: 'fruit'},
        {name: 'orange', type: 'fruit'},
      ]);
    //
    map(REPLACE_ME, data).should.be.eql(['apple', 'orange', 'asparagus']);
    //
  });
  xit('is also any function that returns a function', () => {
    //
    // `compose` is an example. We give it (n>0) functions, and it
    // gives us a new function in return.
    //
    const getFruitNames = compose(map(REPLACE_ME), filter(REPLACE_ME));
    getFruitNames(data).should.be.eql(['apple', 'orange']);
    //
    const getNumberOfVegetables = compose(length, filter(REPLACE_ME));
    getNumberOfVegetables(data).should.be.eql(1);
  });
});
