import * as utils from '../src';

describe('tc-utils', () => {
  it('typeOf', () => {
    expect(utils.typeOf('')).to.equal('string');
    expect(utils.typeOf(0)).to.equal('number');
    expect(utils.typeOf(true)).to.equal('boolean');
    expect(utils.typeOf(undefined)).to.equal('undefined');
    expect(utils.typeOf(null)).to.equal('null');
    expect(utils.typeOf({})).to.equal('object');
    expect(utils.typeOf([])).to.equal('array');
    expect(utils.typeOf(() => {})).to.equal('function');
  });

  it('isUndefined', () => {
    expect(utils.isUndefined(undefined)).to.be.true;
    expect(utils.isUndefined(null)).to.be.false;
  });

  it('isString', () => {
    expect(utils.isString('')).to.be.true;
    expect(utils.isString(0)).to.be.false;
  });

  it('isEmptyString', () => {
    expect(utils.isEmptyString('')).to.be.true;
    expect(utils.isEmptyString(' ')).to.be.false;
  });

  it('isNaN', () => {
    expect(utils.isNaN(NaN)).to.be.true;
    expect(utils.isNaN(0)).to.be.false;
  });

  it('isNumber', () => {
    expect(utils.isNumber(0)).to.be.true;
    expect(utils.isNumber(NaN)).to.be.false;
    expect(utils.isNumber('')).to.be.false;
  });

  it('isBoolean', () => {
    expect(utils.isBoolean(true)).to.be.true;
    expect(utils.isBoolean(false)).to.be.true;
    expect(utils.isBoolean('true')).to.be.false;
    expect(utils.isBoolean('false')).to.be.false;
  });

  it('isObject', () => {
    expect(utils.isObject({})).to.be.true;
    expect(utils.isObject(null)).to.be.false;
    expect(utils.isObject('')).to.be.false;
  });

  it('isPlainObject', () => {
    expect(utils.isPlainObject({})).to.be.true;
    expect(utils.isPlainObject([])).to.be.false;
  });

  it('isEmptyObject', () => {
    expect(utils.isEmptyObject({})).to.be.true;
    expect(utils.isEmptyObject({ foo: 'foo' })).to.be.false;
  });

  it('isArray', () => {
    expect(utils.isArray([])).to.be.true;
    expect(utils.isArray({})).to.be.false;
  });

  it('isEmptyArray', () => {
    expect(utils.isEmptyArray([])).to.be.true;
    expect(utils.isEmptyArray(['foo'])).to.be.false;
  });

  it('isFunction', () => {
    expect(utils.isFunction(() => {})).to.be.true;
    expect(utils.isFunction({})).to.be.false;
  });

  it('isEmpty', () => {
    expect(utils.isEmpty('')).to.be.true;
    expect(utils.isEmpty(' ')).to.be.false;
    expect(utils.isEmpty([])).to.be.true;
    expect(utils.isEmpty(['foo'])).to.be.false;
    expect(utils.isEmpty({})).to.be.true;
    expect(utils.isEmpty({ foo: 'foo' })).to.be.false;
  });

  it('includes', () => {
    expect(utils.includes('foo', 'foo bar')).to.be.true;
    expect(utils.includes('foo', 'bar baz')).to.be.false;
    expect(utils.includes('foo', ['foo', 'bar'])).to.be.true;
    expect(utils.includes('foo', ['bar', 'baz'])).to.be.false;
  });

  it('forEach', () => {
    utils.forEach(['foo'], value => expect(value).to.equal('foo'));
    utils.forEach({ foo: 'bar' }, (value, index) => {
      expect(index).to.equal('foo');
      expect(value).to.equal('bar');
    });
  });

  it('assign', () => {
    const obj = { foo: 'foo' };

    utils.assign(obj, { bar: 'bar' }, { baz: 'baz' });
    expect(obj.foo).to.equal('foo');
    expect(obj.bar).to.equal('bar');
    expect(obj.baz).to.equal('baz');
  });
});
