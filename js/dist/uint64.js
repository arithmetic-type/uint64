(function(exports, undefined){

	'use strict';


/* js/src/add64.js */

var add64 = function ( a , b ) {

	var t , u , c ;

	t = ( a[1] >>> 0 ) + ( b[1] >>> 0 ) ;
	u = t & 0xffffffff ;
	c = +( t > 0xffffffff ) ;

	return [ ( a[0] + b[0] + c ) & 0xffffffff , u ] ;

} ;

exports.add64 = add64 ;

/* js/src/and64.js */

var and64 = function ( a , b ) {

	return [ a[0] & b[0] , a[1] & b[1] ] ;

} ;

exports.and64 = and64 ;

/* js/src/big64.js */

var big64 = function ( a , o ) {

	return [
		( a[o + 0] << 24 ) | ( a[o + 1] << 16 ) | ( a[o + 2] << 8 ) | a[o + 3] ,
		( a[o + 4] << 24 ) | ( a[o + 5] << 16 ) | ( a[o + 6] << 8 ) | a[o + 7]
	] ;

} ;

exports.big64 = big64 ;

/* js/src/compare.js */

var compare = function ( a , b ) {

	return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 :
	       a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0 ;

} ;

exports.compare = compare ;

/* js/src/limits.js */

/** 0 */
exports.min = [ 0x00000000 , 0x00000000 ] ;

/** 2^64 - 1 */
exports.max = [ 0xffffffff , 0xffffffff ] ;

/* js/src/not64.js */

var not64 = function ( a ) {

	return [ ~a[0] , ~a[1] ] ;

} ;

exports.not64 = not64 ;

/* js/src/rot64.js */

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

/* js/src/shr64.js */

var shr64 = function ( a , s ) {

	return [ a[0] >>> s , ( a[0] << ( 32 - s ) ) | ( a[1] >>> s ) ] ;

} ;

exports.shr64 = shr64 ;

/* js/src/xor64.js */

var xor64 = function ( a , b ) {

	return [ a[0] ^ b[0] , a[1] ^ b[1] ] ;

} ;

exports.xor64 = xor64 ;

})(typeof exports === 'undefined' ? this['uint64'] = {} : exports);
