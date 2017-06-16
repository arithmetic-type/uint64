
/**
 * Right rotate a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * NB: used in the sha2 family
 *
 * @param {Array} a
 * @param {Number} s `0 <= s <= 64`
 * @returns {Array}
 */

export function rotr64 (a, s) {
	if ( s === 0 || s === 64 ) {
		return [a[0],a[1]];
	}
	else if (s < 32) {
		return [(a[1] << (32-s)) | a[0] >>> s, (a[0] << (32-s)) | (a[1] >>> s)];
	}
	else if (s === 32) {
		return [a[1],a[0]];
	}
	else {
		s -= 32;
		return [(a[0] << (32-s)) | (a[1] >>> s), (a[1] << (32-s)) | a[0] >>> s];
	}
}
