# node-object-prettify

Sort properties in an object using a template

[![npm](https://img.shields.io/npm/v/object-prettify.svg)](https://www.npmjs.com/package/object-prettify)
[![Travis (.org)](https://img.shields.io/travis/Nicklason/node-object-prettify.svg)](https://travis-ci.org/Nicklason/node-object-prettify)
[![Coveralls github](https://img.shields.io/coveralls/github/Nicklason/node-object-prettify.svg)](https://coveralls.io/github/Nicklason/node-object-prettify)

[![npm](https://nodei.co/npm/object-prettify.png)](https://nodei.co/npm/object-prettify/)

# Introduction
This module can sort properties of an object using a template. That way you can have inputs of different order, and sort it how you like to have repeating structure.

# Examples

```js
const objectPrettify = require('object-prettify');

const target = { bar: '', foo: '' };
// Object to sort

const template = { foo: 1, bar: 1 };
// How the properties should be arranged (the value of the properties does not matter, but the order does)

const prettified = objectPrettify(target, select);
// The result will be { foo: '', bar: '' }
```

Template as an array

```js
const objectPrettify = require('object-prettify');

const target = { bar: '', foo: '' };

const template = [ 'foo', 'bar' ];

const prettified = objectPrettify(target, select);
// The result will be { foo: '', bar: '' }
```