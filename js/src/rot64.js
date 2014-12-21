
var rot64 = function ( a , s ) {

	if ( s < 32 ) {

		return [
			( a[1] << ( 32 - s ) ) | ( a[0] >>> s ) ,
			( a[0] << ( 32 - s ) ) | ( a[1] >>> s )
		] ;

	}

	else {

		s -= 32 ;

		return [
			( a[0] << ( 32 - s ) ) | ( a[1] >>> s ) ,
			( a[1] << ( 32 - s ) ) | ( a[0] >>> s )
		] ;

	}

} ;

exports.rot64 = rot64 ;
