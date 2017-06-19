[@aureooms/js-uint64](https://aureooms.github.io/js-uint64)
==

64-bit unsigned integer arithmetic and logic operators for JavaScript.
Implemented using big endian arrays of two signed 32-bit integers.

Used in [@aureooms/js-hash](https://github.com/aureooms/js-hash).
For the 32-bit counterpart, see [@aureooms/js-uint32](https://github.com/aureooms/js-uint32).

```js
let a = get64(0, 1) ;
rotr64(a, 1); // [-1, 0]

let x = get64(0xFFFFFFFF, 0xFFFFFFFF);
add64(x, x); // [-1, -2]
```

[![License](https://img.shields.io/github/license/aureooms/js-uint64.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-uint64/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-uint64.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-uint64)
[![Build Status](https://img.shields.io/travis/aureooms/js-uint64.svg?style=flat)](https://travis-ci.org/aureooms/js-uint64)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-uint64.svg?style=flat)](https://coveralls.io/r/aureooms/js-uint64)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-uint64.svg?style=flat)](https://david-dm.org/aureooms/js-uint64#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-uint64.svg?style=flat)](https://david-dm.org/aureooms/js-uint64#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-uint64.svg?style=flat)](https://codeclimate.com/github/aureooms/js-uint64)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-uint64.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-uint64)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-uint64.svg?style=flat)](https://github.com/aureooms/js-uint64/issues)
[![Documentation](https://aureooms.github.io/js-uint64/badge.svg)](https://aureooms.github.io/js-uint64/source.html)
