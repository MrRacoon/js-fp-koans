import {REPLACE_ME} from './internal';
import {
  objOf, has, keys, values, prop, propOr, path, pathOr, assoc, assocPath,
  dissoc, dissocPath, merge, mergeAll, map, mapObjIndexed, toPairs, fromPairs,
  pick,
  // helpers
  inc,
} from 'ramda';

describe('8. objects', () => {
  xdescribe('objOf', () => {
    it('creates a singleton object', () => {
      objOf('a', 42).should.be.eql({a: REPLACE_ME});
    });
  });

  xdescribe('has', () => {
    it('returns true if the key exists in the object', () => {
      has('a', {a: 42}).should.be.eql(REPLACE_ME);
      has('b', {a: 42}).should.be.eql(REPLACE_ME);
    });
  });

  xdescribe('keys', () => {
    it('should return a list of all the keys in the object', () => {
      keys({a: 42, REPLACE_ME: 84}).should.be.eql(['a', 'b']);
    });
  });
  xdescribe('values', () => {
    it('should return a list of all the values in an object', () => {
      values({a: 42, b: REPLACE_ME}).should.be.eql([42, 84]);
    });
  });

  xdescribe('prop', () => {
    it('creates a function to return the value at the given property', () => {
      prop('a', {a: REPLACE_ME}).should.be.eql(42);
    });
    it('is curried', () => {
      prop('a')({REPLACE_ME: 42}).should.be.eql(42);
    });
  });
  xdescribe('propOr', () => {
    it('creates a function to return the value at the given property', () => {
      propOr(REPLACE_ME, 'a', {a: 42}).should.be.eql(42);
    });
    it('returns the default value if the given prop doesnt exist', () => {
      propOr(REPLACE_ME, 'b', {a: 42}).should.be.eql('def');
    });
    it('is curried', () => {
      propOr(REPLACE_ME, 'a', {a: 42}).should.be.eql(42);
      propOr(REPLACE_ME)('a', {a: 42}).should.be.eql(42);
      propOr('def', REPLACE_ME)({a: 42}).should.be.eql(42);
      propOr('def')('a')({a: REPLACE_ME}).should.be.eql(42);
    });
  });

  xdescribe('path', () => {
    it('should get the nested value', () => {
      path(['a', REPLACE_ME, 'c'], {a: {b: {c: 42}}}).should.be.eql(42);
    });
    it('is curried', () => {
      path(['a', 'b', REPLACE_ME])({a: {b: {c: 42}}}).should.be.eql(42);
    });
  });
  xdescribe('pathOr', () => {
    it('should get the nested value', () => {
      pathOr('def', [REPLACE_ME, 'b', 'c'], {a: {b: {c: 42}}})
        .should.be.eql(42);
    });
    it('should return the default value if the path doesnt exist', () => {
      pathOr('def', ['d', 'b', 'c'], {a: {b: {c: 42}}})
        .should.be.eql(REPLACE_ME);

      pathOr('def', ['a', 'd', 'c'], {a: {b: {c: 42}}})
        .should.be.eql(REPLACE_ME);

      pathOr('def', ['a', 'b', 'd'], {a: {b: {c: 42}}})
        .should.be.eql(REPLACE_ME);
    });
    it('should be curried', () => {
      pathOr('def')(['a', 'b', 'c'], {a: {b: {c: 42}}}).should.be.eql(42);
      pathOr('def', ['a', 'b', 'c'])({a: {b: {c: 42}}}).should.be.eql(42);
      pathOr('def')(['a', 'b', 'c'])({a: {b: {c: 42}}}).should.be.eql(42);
    });
  });

  xdescribe('assoc', () => {
    it('should set a value at a given path', () => {
      assoc('key', REPLACE_ME, {}).should.be.eql({key: 'val'});
    });
  });
  xdescribe('assocPath', () => {
    it('should set a value at a given property', () => {
      assocPath([REPLACE_ME, 'other'], 'val', {})
        .should.be.eql({key: {other: 'val'}});
    });
  });

  xdescribe('dissoc', () => {
    it('should remove the value from the object', () => {
      dissoc('a', {a: 42}).should.be.eql({});
    });
    it('should preserve other associations', () => {
      dissoc('a', {a: 42, b: REPLACE_ME}).should.be.eql({b: 84});
    });
  });
  xdescribe('dissocPath', () => {
    it('should remove the value from the object', () => {
      dissocPath(['a'], REPLACE_ME).should.be.eql({});
      dissocPath(['a', REPLACE_ME], {a: {b: 42}}).should.be.eql({a: {}});
    });
    it('should preserve other associations', () => {
      dissocPath(['a'], {a: 42, b: REPLACE_ME}).should.be.eql({b: 84});
      dissocPath([REPLACE_ME, 'b'], {a: {b: 42, c: 84}, d: 'e'})
        .should.be.eql({a: {c: 84}, d: 'e'});
    });
  });

  xdescribe('merge', () => {
    it('should combine two objects together', () => {
      merge({a: REPLACE_ME}, {b: 'b'}).should.be.eql({a: 'a', b: 'b'});
    });
    it('should preserve the right most value during collisions', () => {
      merge({a: 'a'}, {a: REPLACE_ME}).should.be.eql({a: 'b'});
    });
  });
  xdescribe('mergeAll', () => {
    it('should combine a list of objects together', () => {
      mergeAll([{a: REPLACE_ME}, {b: REPLACE_ME}, {c: REPLACE_ME}])
        .should.be.eql({a: 'a', b: 'b', c: 'c'});
    });
    it('should preserve the right most value during collisions', () => {
      mergeAll([{a: REPLACE_ME}, {a: 'b'}, {a: REPLACE_ME}])
        .should.be.eql({a: 'c'});
    });
  });

  xdescribe('map', () => {
    it('should apply a function to each value', () => {
      map(inc, {a: REPLACE_ME, b: 42})
        .should.be.eql({a: 2, b: 43});
    });
  });
  xdescribe('mapObjIndexed', () => {
    const fn = (value, key, obj) => key + value;
    it('maps a function over each value, and passes the key as well', () => {
      mapObjIndexed(fn, {a: 1, b: REPLACE_ME})
        .should.be.eql({a: 'a1', b: 'b2'});
    });
  });

  xdescribe('toPairs', () => {
    it('converts an object to a list of key value pairs', () => {
      toPairs({a: 1, b: REPLACE_ME}).should.be.eql([['a', 1], ['b', 2]]);
    });
  });
  xdescribe('fromPairs', () => {
    it('constructs an object from a list of pairs', () => {
      fromPairs([['a', REPLACE_ME], ['b', 2]]).should.be.eql({a: 1, b: 2});
    });
  });

  xdescribe('pick', () => {
    it('preserves only the values passed in', () => {
      pick(['a', 'b'], {a: 1, b: REPLACE_ME, c: 3})
        .should.be.eql({a: REPLACE_ME, b: 2});
    });
  });
});
