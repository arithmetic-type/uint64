# Usage

The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
await import( 'regenerator-runtime/runtime.js' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const uint64 = await import( '@arithmetic-type/uint64' ) ;
// or
import * as uint64 from '@arithmetic-type/uint64' ;
```
