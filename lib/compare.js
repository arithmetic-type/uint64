"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.compare = compare;
function compare(a, b) {
	var _a = _slicedToArray(a, 2),
	    a0 = _a[0],
	    a1 = _a[1];

	var _b = _slicedToArray(b, 2),
	    b0 = _b[0],
	    b1 = _b[1];

	a0 >>>= 0;
	a1 >>>= 0;
	b0 >>>= 0;
	b1 >>>= 0;

	return a0 < b0 ? -1 : a0 > b0 ? 1 : a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wYXJlLmpzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJhIiwiYiIsImEwIiwiYTEiLCJiMCIsImIxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUNnQkEsTyxHQUFBQSxPO0FBQVQsU0FBU0EsT0FBVCxDQUFtQkMsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCO0FBQUEseUJBRWxCRCxDQUZrQjtBQUFBLEtBRTVCRSxFQUY0QjtBQUFBLEtBRXhCQyxFQUZ3Qjs7QUFBQSx5QkFHbEJGLENBSGtCO0FBQUEsS0FHNUJHLEVBSDRCO0FBQUEsS0FHeEJDLEVBSHdCOztBQUtqQ0gsU0FBUSxDQUFSO0FBQ0FDLFNBQVEsQ0FBUjtBQUNBQyxTQUFRLENBQVI7QUFDQUMsU0FBUSxDQUFSOztBQUVBLFFBQU9ILEtBQUtFLEVBQUwsR0FBVSxDQUFDLENBQVgsR0FBZUYsS0FBS0UsRUFBTCxHQUFVLENBQVYsR0FDZkQsS0FBS0UsRUFBTCxHQUFVLENBQUMsQ0FBWCxHQUFlRixLQUFLRSxFQUFMLEdBQVUsQ0FBVixHQUFjLENBRHBDO0FBR0EiLCJmaWxlIjoiY29tcGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUgKCBhICwgYiApIHtcblxuXHRsZXQgW2EwLCBhMV0gPSBhO1xuXHRsZXQgW2IwLCBiMV0gPSBiO1xuXG5cdGEwID4+Pj0gMDtcblx0YTEgPj4+PSAwO1xuXHRiMCA+Pj49IDA7XG5cdGIxID4+Pj0gMDtcblxuXHRyZXR1cm4gYTAgPCBiMCA/IC0xIDogYTAgPiBiMCA/IDEgOlxuXHQgICAgICAgYTEgPCBiMSA/IC0xIDogYTEgPiBiMSA/IDEgOiAwIDtcblxufVxuXG4iXX0=