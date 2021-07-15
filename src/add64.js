export function add64(a, b) {
	const [a0, a1] = a;
	const [b0, b1] = b;

	const u = (a1 + b1) | 0;
	// Either two highest bits are on
	// or one highest bit is on and the
	// other number is >= in absolute value
	const c = Number((a1 < 0 && (b1 < 0 || b1 > ~a1)) || (b1 < 0 && b1 > ~a1));

	return [(a0 + b0 + c) | 0, u];
}
