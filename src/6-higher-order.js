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
const getName = prop('name');

// isFruit :: { String: a } -> Bool
const isFruit = whereEq({type: 'fruit'});

// isVegetable :: { String: a } -> Bool
const isVegetable = propEq('type', 'vegetable');

describe('6. higher order functions', () => {
  xit('is any function that takes a function', () => {
    //
    filter(isFruit, data)
      .should.be.eql([
        {name: 'apple', type: 'fruit'},
        {name: 'orange', type: 'fruit'},
      ]);
    //
    map(getName, data).should.be.eql(['apple', 'orange', 'asparagus']);
    //
  });
  xit('is also any function that returns a function', () => {
    //
    // `compose` is an example. We give it (n>0) functions, and it
    // gives us a new function in return.
    //
    const getFruitNames = compose(map(getName), filter(isFruit));
    getFruitNames(data).should.be.eql(['apple', 'orange']);
    //
    const getNumberOfVegetables = compose(length, filter(isVegetable));
    getNumberOfVegetables(data).should.be.eql(1);
  });
});
