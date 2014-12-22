
var compare = function ( a , b ) {

	return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 :
	       a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0 ;

} ;

exports.compare = compare ;
