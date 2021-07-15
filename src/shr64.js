/**
 * Right shift a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * @param {Array} a
 * @param {Number} s `s >= 0`
 * @returns {Array}
 */
export function shr64(a, s) {
	if (s === 0) {
		return [a[0], a[1]];
	}

	if (s < 32) {
		return [(a[0] >>> s) | 0, (a[0] << (32 - s)) | (a[1] >>> s)];
	}

	if (s < 64) {
		return [0, (a[0] >>> (s - 32)) | 0];
	}

	return [a[0], a[1]];
}
