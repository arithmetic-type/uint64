"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.add64 = add64;
function add64(a, b) {
	var _a = _slicedToArray(a, 2),
	    a0 = _a[0],
	    a1 = _a[1];

	var _b = _slicedToArray(b, 2),
	    b0 = _b[0],
	    b1 = _b[1];

	var u = a1 + b1 | 0;
	// either two highest bits are on
	// or one highest bit is on and the
	// other number is >= in absolute value
	var c = +(a1 < 0 && (b1 < 0 || b1 > ~a1) || b1 < 0 && b1 > ~a1);

	return [a0 + b0 + c | 0, u];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGQ2NC5qcyJdLCJuYW1lcyI6WyJhZGQ2NCIsImEiLCJiIiwiYTAiLCJhMSIsImIwIiwiYjEiLCJ1IiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFBZ0JBLEssR0FBQUEsSztBQUFULFNBQVNBLEtBQVQsQ0FBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUFBLHlCQUVYRCxDQUZXO0FBQUEsS0FFckJFLEVBRnFCO0FBQUEsS0FFakJDLEVBRmlCOztBQUFBLHlCQUdYRixDQUhXO0FBQUEsS0FHckJHLEVBSHFCO0FBQUEsS0FHakJDLEVBSGlCOztBQUs1QixLQUFNQyxJQUFLSCxLQUFLRSxFQUFOLEdBQVksQ0FBdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFNRSxJQUFJLEVBQUdKLEtBQUssQ0FBTCxLQUFXRSxLQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFDRixFQUEzQixDQUFELElBQXFDRSxLQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFDRixFQUF2RCxDQUFWOztBQUVBLFFBQU8sQ0FBRUQsS0FBS0UsRUFBTCxHQUFVRyxDQUFYLEdBQWdCLENBQWpCLEVBQW9CRCxDQUFwQixDQUFQO0FBRUEiLCJmaWxlIjoiYWRkNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkNjQgKGEsIGIpIHtcblxuXHRjb25zdCBbYTAsIGExXSA9IGE7XG5cdGNvbnN0IFtiMCwgYjFdID0gYjtcblxuXHRjb25zdCB1ID0gKGExICsgYjEpIHwgMCA7XG5cdC8vIGVpdGhlciB0d28gaGlnaGVzdCBiaXRzIGFyZSBvblxuXHQvLyBvciBvbmUgaGlnaGVzdCBiaXQgaXMgb24gYW5kIHRoZVxuXHQvLyBvdGhlciBudW1iZXIgaXMgPj0gaW4gYWJzb2x1dGUgdmFsdWVcblx0Y29uc3QgYyA9ICsoKGExIDwgMCAmJiAoYjEgPCAwIHx8IGIxID4gfmExKSkgfHwgKGIxIDwgMCAmJiBiMSA+IH5hMSkpO1xuXG5cdHJldHVybiBbKGEwICsgYjAgKyBjKSB8IDAsIHVdO1xuXG59XG4iXX0=