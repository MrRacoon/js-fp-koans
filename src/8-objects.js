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
      objOf('a', 42).should.be.eql({a: 42});
    });
  });

  xdescribe('has', () => {
    it('returns true if the key exists in the object', () => {
      has('a', {a: 42}).should.be.eql(true);
      has('b', {a: 42}).should.be.eql(false);
    });
  });

  xdescribe('keys', () => {
    it('should return a list of all the keys in the object', () => {
      keys({a: 42, b: 84}).should.be.eql(['a', 'b']);
    });
  });
  xdescribe('values', () => {
    it('should return a list of all the values in an object', () => {
      values({a: 42, b: 84}).should.be.eql([42, 84]);
    });
  });

  xdescribe('prop', () => {
    it('creates a function to return the value at the given property', () => {
      prop('a', {a: 42}).should.be.eql(42);
    });
    it('is curried', () => {
      prop('a')({a: 42}).should.be.eql(42);
    });
  });
  xdescribe('propOr', () => {
    it('creates a function to return the value at the given property', () => {
      propOr('def', 'a', {a: 42}).should.be.eql(42);
    });
    it('returns the default value if the given prop doesnt exist', () => {
      propOr('def', 'b', {a: 42}).should.be.eql('def');
    });
    it('is curried', () => {
      propOr('def', 'a', {a: 42}).should.be.eql(42);
      propOr('def')('a', {a: 42}).should.be.eql(42);
      propOr('def', 'a')({a: 42}).should.be.eql(42);
      propOr('def')('a')({a: 42}).should.be.eql(42);
    });
  });

  xdescribe('path', () => {
    it('should get the nested value', () => {
      path(['a', 'b', 'c'], {a: {b: {c: 42}}}).should.be.eql(42);
    });
    it('is curried', () => {
      path(['a', 'b', 'c'])({a: {b: {c: 42}}}).should.be.eql(42);
    });
  });
  xdescribe('pathOr', () => {
    it('should get the nested value', () => {
      pathOr('def', ['a', 'b', 'c'], {a: {b: {c: 42}}}).should.be.eql(42);
    });
    it('should return the default value if the path doesnt exist', () => {
      pathOr('def', [], {a: {b: {c: 42}}}).should.be.eql({a: {b: {c: 42}}});
      pathOr('def', ['d', 'b', 'c'], {a: {b: {c: 42}}}).should.be.eql('def');
      pathOr('def', ['a', 'd', 'c'], {a: {b: {c: 42}}}).should.be.eql('def');
      pathOr('def', ['a', 'b', 'd'], {a: {b: {c: 42}}}).should.be.eql('def');
    });
    it('should be curried', () => {
      pathOr('def')(['a', 'b', 'c'], {a: {b: {c: 42}}}).should.be.eql(42);
      pathOr('def', ['a', 'b', 'c'])({a: {b: {c: 42}}}).should.be.eql(42);
      pathOr('def')(['a', 'b', 'c'])({a: {b: {c: 42}}}).should.be.eql(42);
    });
  });

  xdescribe('assoc', () => {
    it('should set a value at a given path', () => {
      assoc('key', 'val', {}).should.be.eql({key: 'val'});
    });
    it('is curried', () => {
      assoc('key')('val', {}).should.be.eql({key: 'val'});
      assoc('key', 'val')({}).should.be.eql({key: 'val'});
      assoc('key')('val')({}).should.be.eql({key: 'val'});
    });
  });
  xdescribe('assocPath', () => {
    it('should set a value at a given property', () => {
      assocPath(['key', 'other'], 'val', {})
        .should.be.eql({key: {other: 'val'}});
    });
    it('is curried', () => {
      assocPath(['key', 'other'])('val', {})
        .should.be.eql({key: {other: 'val'}});

      assocPath(['key', 'other'], 'val')({})
        .should.be.eql({key: {other: 'val'}});

      assocPath(['key', 'other'])('val')({})
        .should.be.eql({key: {other: 'val'}});
    });
  });

  xdescribe('dissoc', () => {
    it('should remove the value from the object', () => {
      dissoc('a', {a: 42}).should.be.eql({});
    });
    it('should preserve other associations', () => {
      dissoc('a', {a: 42, b: 84}).should.be.eql({b: 84});
    });
    it('is curried', () => {
      dissoc('a')({a: 42}).should.be.eql({});
    });
  });
  xdescribe('dissocPath', () => {
    it('should remove the value from the object', () => {
      dissocPath(['a'], {a: 42}).should.be.eql({});
      dissocPath(['a', 'b'], {a: {b: 42}}).should.be.eql({a: {}});
    });
    it('should preserve other associations', () => {
      dissocPath(['a'], {a: 42, b: 84}).should.be.eql({b: 84});
      dissocPath(['a', 'b'], {a: {b: 42, c: 84}, d: 'e'})
        .should.be.eql({a: {c: 84}, d: 'e'});
    });
    it('is curried', () => {
      dissocPath(['a'])({a: 42}).should.be.eql({});
    });
  });

  xdescribe('merge', () => {
    it('should combine two objects together', () => {
      merge({a: 'a'}, {b: 'b'}).should.be.eql({a: 'a', b: 'b'});
    });
    it('should preserve the right most value during collisions', () => {
      merge({a: 'a'}, {a: 'b'}).should.be.eql({a: 'b'});
    });
    it('is curried', () => {
      merge({a: 'a'})({b: 'b'}).should.be.eql({a: 'a', b: 'b'});
    });
  });
  xdescribe('mergeAll', () => {
    it('should combine a list of objects together', () => {
      mergeAll([{a: 'a'}, {b: 'b'}, {c: 'c'}])
        .should.be.eql({a: 'a', b: 'b', c: 'c'});
    });
    it('should preserve the right most value during collisions', () => {
      mergeAll([{a: 'a'}, {a: 'b'}, {a: 'c'}])
        .should.be.eql({a: 'c'});
    });
  });

  xdescribe('map', () => {
    it('should apply a function to each value', () => {
      map(inc, {a: 1, b: 42}).should.be.eql({a: 2, b: 43});
    });
    it('should be curried', () => {
      map(inc)({a: 1, b: 42}).should.be.eql({a: 2, b: 43});
    });
  });
  xdescribe('mapObjIndexed', () => {
    const fn = (value, key, obj) => key + value;
    it('maps a function over each value, and passes the key as well', () => {
      mapObjIndexed(fn, {a: 1, b: 2}).should.be.eql({a: 'a1', b: 'b2'});
    });
    it('is curried', () => {
      mapObjIndexed(fn)({a: 1, b: 2}).should.be.eql({a: 'a1', b: 'b2'});
    });
  });

  xdescribe('toPairs', () => {
    it('converts an object to a list of key value pairs', () => {
      toPairs({a: 1, b: 2}).should.be.eql([['a', 1], ['b', 2]]);
    });
  });
  xdescribe('fromPairs', () => {
    it('constructs an object from a list of pairs', () => {
      fromPairs([['a', 1], ['b', 2]]).should.be.eql({a: 1, b: 2});
    });
  });

  xdescribe('pick', () => {
    it('preserves only the values passed in', () => {
      pick(['a', 'b'], {a: 1, b: 2, c: 3}).should.be.eql({a: 1, b: 2});
    });
    it('is curried', () => {
      pick(['a', 'b'])({a: 1, b: 2, c: 3}).should.be.eql({a: 1, b: 2});
    });
  });
});
