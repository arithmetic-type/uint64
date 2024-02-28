:rabbit: [@arithmetic-type/uint64](https://arithmetic-type.github.io/uint64)
==

64-bit unsigned integer arithmetic and logic operators for JavaScript.
Implemented using big endian arrays of two signed 32-bit integers.

Used in [js-hash](https://github.com/make-github-pseudonymous-again/js-hash).
For the 32-bit counterpart, see [arithmetic-type/uint32](https://github.com/arithmetic-type/uint32).

```js
let a = get64(0, 1) ;
rotr64(a, 1); // [-1, 0]

let x = get64(0xFFFFFFFF, 0xFFFFFFFF);
add64(x, x); // [-1, -2]
```

[![License](https://img.shields.io/github/license/arithmetic-type/uint64.svg)](https://raw.githubusercontent.com/arithmetic-type/uint64/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@arithmetic-type/uint64.svg)](https://www.npmjs.org/package/@arithmetic-type/uint64)
[![Tests](https://img.shields.io/github/workflow/status/arithmetic-type/uint64/ci:cover?event=push&label=tests)](https://github.com/arithmetic-type/uint64/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/arithmetic-type/uint64.svg)](https://github.com/arithmetic-type/uint64/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/arithmetic-type/uint64.svg)](https://github.com/arithmetic-type/uint64/issues)
[![Downloads](https://img.shields.io/npm/dm/@arithmetic-type/uint64.svg)](https://www.npmjs.org/package/@arithmetic-type/uint64)

[![Code issues](https://img.shields.io/codeclimate/issues/arithmetic-type/uint64.svg)](https://codeclimate.com/github/arithmetic-type/uint64/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/arithmetic-type/uint64.svg)](https://codeclimate.com/github/arithmetic-type/uint64/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/arithmetic-type/uint64/main.svg)](https://codecov.io/gh/arithmetic-type/uint64)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/arithmetic-type/uint64.svg)](https://codeclimate.com/github/arithmetic-type/uint64/trends/technical_debt)
[![Documentation](https://arithmetic-type.github.io/uint64/badge.svg)](https://arithmetic-type.github.io/uint64/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@arithmetic-type/uint64)](https://bundlephobia.com/result?p=@arithmetic-type/uint64)
