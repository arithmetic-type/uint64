"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.shr64 = shr64;
/**
 * Right shift a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * @param {Array} a
 * @param {Number} s `s >= 0`
 * @returns {Array}
 */
function shr64(a, s) {
	if (s === 0) {
		return [a[0], a[1]];
	} else if (s < 32) {
		return [a[0] >>> s | 0, a[0] << 32 - s | a[1] >>> s];
	} else if (s < 64) {
		return [0, a[0] >>> s - 32 | 0];
	} else {
		return [a[0], a[1]];
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaHI2NC5qcyJdLCJuYW1lcyI6WyJzaHI2NCIsImEiLCJzIl0sIm1hcHBpbmdzIjoiOzs7OztRQVFnQkEsSyxHQUFBQSxLO0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLEtBQVQsQ0FBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUM1QixLQUFLQSxNQUFNLENBQVgsRUFBZTtBQUNkLFNBQU8sQ0FBQ0QsRUFBRSxDQUFGLENBQUQsRUFBT0EsRUFBRSxDQUFGLENBQVAsQ0FBUDtBQUNBLEVBRkQsTUFHSyxJQUFLQyxJQUFJLEVBQVQsRUFBYztBQUNsQixTQUFPLENBQUNELEVBQUUsQ0FBRixNQUFTQyxDQUFULEdBQWEsQ0FBZCxFQUFrQkQsRUFBRSxDQUFGLEtBQVMsS0FBR0MsQ0FBYixHQUFvQkQsRUFBRSxDQUFGLE1BQVNDLENBQTlDLENBQVA7QUFDQSxFQUZJLE1BR0EsSUFBS0EsSUFBSSxFQUFULEVBQWM7QUFDbEIsU0FBTyxDQUFDLENBQUQsRUFBSUQsRUFBRSxDQUFGLE1BQVVDLElBQUUsRUFBWixHQUFrQixDQUF0QixDQUFQO0FBQ0EsRUFGSSxNQUdEO0FBQ0gsU0FBTyxDQUFDRCxFQUFFLENBQUYsQ0FBRCxFQUFPQSxFQUFFLENBQUYsQ0FBUCxDQUFQO0FBQ0E7QUFDRCIsImZpbGUiOiJzaHI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmlnaHQgc2hpZnQgYSA2NC1iaXQgdW5zaWduZWQgaW50ZWdlciBnaXZlbiBhcyBhIHBhaXIgb2YgdHdvIDMyLWJpdCBzaWduZWRcbiAqIGludGVnZXJzIGluIGJpZyBlbmRpYW4gb3JkZXIuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IHMgYHMgPj0gMGBcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNocjY0IChhLCBzKSB7XG5cdGlmICggcyA9PT0gMCApIHtcblx0XHRyZXR1cm4gW2FbMF0sIGFbMV1dO1xuXHR9XG5cdGVsc2UgaWYgKCBzIDwgMzIgKSB7XG5cdFx0cmV0dXJuIFthWzBdID4+PiBzIHwgMCwgKGFbMF0gPDwgKDMyLXMpKSB8IChhWzFdID4+PiBzKV07XG5cdH1cblx0ZWxzZSBpZiAoIHMgPCA2NCApIHtcblx0XHRyZXR1cm4gWzAsIGFbMF0gPj4+IChzLTMyKSB8IDBdO1xuXHR9XG5cdGVsc2V7XG5cdFx0cmV0dXJuIFthWzBdLCBhWzFdXTtcblx0fVxufVxuIl19