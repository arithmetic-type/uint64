
var add64 = function ( a , b ) {

	var t , u , c ;

	t = ( a[1] >>> 0 ) + ( b[1] >>> 0 ) ;
	u = t & 0xffffffff ;
	c = +( t > 0xffffffff ) ;

	return [ ( a[0] + b[0] + c ) & 0xffffffff , u ] ;

} ;

exports.add64 = add64 ;
