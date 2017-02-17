export const shr64 = (a, s) => {
	if ( s < 32 ) {
		return [a[0] >>> s | 0, (a[0] << (32-s)) | (a[1] >>> s)];
	}
	else if ( s < 64 ) {
		return [0, a[0] >>> (s-32) | 0];
	}
	else{
		return [a[0], a[1]];
	}
}
