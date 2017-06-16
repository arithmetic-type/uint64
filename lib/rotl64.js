"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotl64 = rotl64;

/**
 * Left rotate a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * @param {Array} a
 * @param {Number} s `0 <= s <= 64`
 * @returns {Array}
 */
function rotl64(a, s) {
  return rotr64(a, 64 - s);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3RsNjQuanMiXSwibmFtZXMiOlsicm90bDY0IiwiYSIsInMiLCJyb3RyNjQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxNLEdBQUFBLE07O0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLE1BQVQsQ0FBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM3QixTQUFPQyxPQUFPRixDQUFQLEVBQVUsS0FBS0MsQ0FBZixDQUFQO0FBQ0EiLCJmaWxlIjoicm90bDY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIExlZnQgcm90YXRlIGEgNjQtYml0IHVuc2lnbmVkIGludGVnZXIgZ2l2ZW4gYXMgYSBwYWlyIG9mIHR3byAzMi1iaXQgc2lnbmVkXG4gKiBpbnRlZ2VycyBpbiBiaWcgZW5kaWFuIG9yZGVyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBzIGAwIDw9IHMgPD0gNjRgXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RsNjQgKGEsIHMpIHtcblx0cmV0dXJuIHJvdHI2NChhLCA2NCAtIHMpO1xufVxuIl19