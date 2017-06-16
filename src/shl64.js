/**
 * Left shift a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * @param {Array} a
 * @param {Number} s `s >= 0`
 * @returns {Array}
 */
export function shl64 (a, s) {
	if ( s === 0 ) {
		return [a[0], a[1]];
	}
	else if ( s < 32 ) {
		return [(a[1] >>> (32-s)) | (a[0] << s), a[1] << s | 0];
	}
	else if ( s < 64 ) {
		return [a[1] << (s-32) | 0, 0];
	}
	else{
		return [a[0], a[1]];
	}
}
