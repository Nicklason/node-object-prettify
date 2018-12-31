'use strict';

/* eslint no-undef: 0 */

const objectPrettify = require('../');
const assert = require('assert');

describe('Errors', function () {
    it('should throw if missing arguments', function () {
        assert.throws(function () {
            objectPrettify();
        });
    });

    it('should throw if wrong types', function () {
        assert.throws(function () {
            objectPrettify('', '');
        });
        assert.throws(function () {
            objectPrettify({}, '');
        });
    });

    it('should throw if key in template is not a string', function () {
        assert.throws(function () {
            objectPrettify({ foo: 'bar', bar: 'foo' }, [null]);
        });

        assert.throws(function () {
            objectPrettify({ foo: 'bar', bar: 'foo' }, [undefined]);
        });

        assert.throws(function () {
            objectPrettify({ foo: 'bar', bar: 'foo' }, [123]);
        });
    });
});

describe('Template', function () {
    it('should work with object template', function () {
        const target = { bar: 'foo', foo: 'bar' };
        const template = { foo: 1, bar: 1 }; // does not matter what the value is, only worry about order

        assert.deepEqual(objectPrettify(target, template), { foo: 'bar', bar: 'foo' });
    });

    it('should work with array template', function () {
        const target = { bar: 'foo', foo: 'bar' };
        const template = ['foo', 'bar'];

        assert.deepEqual(objectPrettify(target, template), { foo: 'bar', bar: 'foo' });
    });

    it('should ignore templates with undefined values', function () {
        const target = { bar: 'foo', foo: 'bar' };
        const template = ['foo', 'bar', 'bazinga'];

        assert.deepEqual(objectPrettify(target, template), { foo: 'bar', bar: 'foo' });
    });

    it('should return an empty object when supplying an empty template', function () {
        const target = { bar: 'foo', foo: 'bar' };
        const template = [];

        assert.deepEqual(objectPrettify(target, template), {});
    });

    it('should return an empty object when supplying an empty target', function () {
        const target = {};
        const template = ['foo', 'bar'];

        assert.deepEqual(objectPrettify(target, template), {});
    });
});
