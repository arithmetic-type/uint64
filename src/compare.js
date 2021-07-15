export function compare(a, b) {
	let [a0, a1] = a;
	let [b0, b1] = b;

	a0 >>>= 0;
	a1 >>>= 0;
	b0 >>>= 0;
	b1 >>>= 0;

	return a0 < b0 ? -1 : a0 > b0 ? 1 : a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
}
