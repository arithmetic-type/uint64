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
	if (s < 32) {
		return [a[0] >>> s | 0, a[0] << 32 - s | a[1] >>> s];
	} else if (s < 64) {
		return [0, a[0] >>> s - 32 | 0];
	} else {
		return [a[0], a[1]];
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaHI2NC5qcyJdLCJuYW1lcyI6WyJzaHI2NCIsImEiLCJzIl0sIm1hcHBpbmdzIjoiOzs7OztRQVFnQkEsSyxHQUFBQSxLO0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLEtBQVQsQ0FBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUM1QixLQUFLQSxJQUFJLEVBQVQsRUFBYztBQUNiLFNBQU8sQ0FBQ0QsRUFBRSxDQUFGLE1BQVNDLENBQVQsR0FBYSxDQUFkLEVBQWtCRCxFQUFFLENBQUYsS0FBUyxLQUFHQyxDQUFiLEdBQW9CRCxFQUFFLENBQUYsTUFBU0MsQ0FBOUMsQ0FBUDtBQUNBLEVBRkQsTUFHSyxJQUFLQSxJQUFJLEVBQVQsRUFBYztBQUNsQixTQUFPLENBQUMsQ0FBRCxFQUFJRCxFQUFFLENBQUYsTUFBVUMsSUFBRSxFQUFaLEdBQWtCLENBQXRCLENBQVA7QUFDQSxFQUZJLE1BR0Q7QUFDSCxTQUFPLENBQUNELEVBQUUsQ0FBRixDQUFELEVBQU9BLEVBQUUsQ0FBRixDQUFQLENBQVA7QUFDQTtBQUNEIiwiZmlsZSI6InNocjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSaWdodCBzaGlmdCBhIDY0LWJpdCB1bnNpZ25lZCBpbnRlZ2VyIGdpdmVuIGFzIGEgcGFpciBvZiB0d28gMzItYml0IHNpZ25lZFxuICogaW50ZWdlcnMgaW4gYmlnIGVuZGlhbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhXG4gKiBAcGFyYW0ge051bWJlcn0gcyBgcyA+PSAwYFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hyNjQgKGEsIHMpIHtcblx0aWYgKCBzIDwgMzIgKSB7XG5cdFx0cmV0dXJuIFthWzBdID4+PiBzIHwgMCwgKGFbMF0gPDwgKDMyLXMpKSB8IChhWzFdID4+PiBzKV07XG5cdH1cblx0ZWxzZSBpZiAoIHMgPCA2NCApIHtcblx0XHRyZXR1cm4gWzAsIGFbMF0gPj4+IChzLTMyKSB8IDBdO1xuXHR9XG5cdGVsc2V7XG5cdFx0cmV0dXJuIFthWzBdLCBhWzFdXTtcblx0fVxufVxuIl19