/**
 * Converts a 8-bytes big endian array to a 64-bit integer (also big endian).
 *
 * @param {Array} a Input big endian array.
 * @param {Number} o Offset in the input array.
 * @returns {Array} The 64-bit integer.
 */
export function big64 (a, o) {
	return [
		(a[o + 0] << 24) | (a[o + 1] << 16) | (a[o + 2] << 8) | a[o + 3],
		(a[o + 4] << 24) | (a[o + 5] << 16) | (a[o + 6] << 8) | a[o + 7]
	] ;
}
