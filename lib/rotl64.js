'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotl64 = rotl64;

var _rotr = require('./rotr64');

/**
 * Left rotate a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * @param {Array} a
 * @param {Number} s `0 <= s <= 64`
 * @returns {Array}
 */
function rotl64(a, s) {
  return (0, _rotr.rotr64)(a, 64 - s);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3RsNjQuanMiXSwibmFtZXMiOlsicm90bDY0IiwiYSIsInMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxNLEdBQUFBLE07O0FBVGhCOztBQUNBOzs7Ozs7OztBQVFPLFNBQVNBLE1BQVQsQ0FBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM3QixTQUFPLGtCQUFPRCxDQUFQLEVBQVUsS0FBS0MsQ0FBZixDQUFQO0FBQ0EiLCJmaWxlIjoicm90bDY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm90cjY0IH0gZnJvbSAnLi9yb3RyNjQnIDtcbi8qKlxuICogTGVmdCByb3RhdGUgYSA2NC1iaXQgdW5zaWduZWQgaW50ZWdlciBnaXZlbiBhcyBhIHBhaXIgb2YgdHdvIDMyLWJpdCBzaWduZWRcbiAqIGludGVnZXJzIGluIGJpZyBlbmRpYW4gb3JkZXIuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IHMgYDAgPD0gcyA8PSA2NGBcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGw2NCAoYSwgcykge1xuXHRyZXR1cm4gcm90cjY0KGEsIDY0IC0gcyk7XG59XG4iXX0=