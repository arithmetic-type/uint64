import { rotr64 } from './rotr64.js' ;
/**
 * Left rotate a 64-bit unsigned integer given as a pair of two 32-bit signed
 * integers in big endian order.
 *
 * @param {Array} a
 * @param {Number} s `0 <= s <= 64`
 * @returns {Array}
 */
export function rotl64 (a, s) {
	return rotr64(a, 64 - s);
}
