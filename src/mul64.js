import {add64} from './add64.js';
import {mul3264} from './mul3264.js';

/**
 * Multiplies two uint64 into one uint64.
 */
export function mul64(a, b) {
	const [a0, a1] = a;
	const [b0, b1] = b;

	const x = [(Math.imul(a1, b0) + Math.imul(a0, b1)) | 0, 0];
	const y = mul3264(a1, b1);
	return add64(x, y);
}
