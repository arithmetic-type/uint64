export function big64 (a, o) {
	return [
		(a[o + 0] << 24) | (a[o + 1] << 16) | (a[o + 2] << 8) | a[o + 3],
		(a[o + 4] << 24) | (a[o + 5] << 16) | (a[o + 6] << 8) | a[o + 7]
	] ;
}
