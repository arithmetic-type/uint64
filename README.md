:rabbit: [@aureooms/js-uint64](https://make-github-pseudonymous-again.github.io/js-uint64)
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

[![License](https://img.shields.io/github/license/aureooms/js-uint64.svg)](https://raw.githubusercontent.com/aureooms/js-uint64/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-uint64.svg)](https://www.npmjs.org/package/@aureooms/js-uint64)
[![Build](https://img.shields.io/travis/aureooms/js-uint64/main.svg)](https://travis-ci.org/aureooms/js-uint64/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-uint64.svg)](https://david-dm.org/aureooms/js-uint64)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-uint64.svg)](https://david-dm.org/aureooms/js-uint64?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-uint64.svg)](https://github.com/aureooms/js-uint64/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-uint64.svg)](https://www.npmjs.org/package/@aureooms/js-uint64)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-uint64.svg)](https://codeclimate.com/github/aureooms/js-uint64/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-uint64.svg)](https://codeclimate.com/github/aureooms/js-uint64/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-uint64/main.svg)](https://codecov.io/gh/aureooms/js-uint64)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-uint64.svg)](https://codeclimate.com/github/aureooms/js-uint64/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-uint64//badge.svg)](https://make-github-pseudonymous-again.github.io/js-uint64//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-uint64)](https://bundlephobia.com/result?p=@aureooms/js-uint64)
