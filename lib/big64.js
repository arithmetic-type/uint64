"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.big64 = big64;
/**
 * Converts a 8-bytes big endian array to a 64-bit integer (also big endian).
 *
 * @param {Array} a Input big endian array.
 * @param {Number} o Offset in the input array.
 * @returns {Array} The 64-bit integer.
 */
function big64(a, o) {
  return [a[o + 0] << 24 | a[o + 1] << 16 | a[o + 2] << 8 | a[o + 3], a[o + 4] << 24 | a[o + 5] << 16 | a[o + 6] << 8 | a[o + 7]];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaWc2NC5qcyJdLCJuYW1lcyI6WyJiaWc2NCIsImEiLCJvIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSyxHQUFBQSxLO0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsS0FBVCxDQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQzVCLFNBQU8sQ0FDTEQsRUFBRUMsSUFBSSxDQUFOLEtBQVksRUFBYixHQUFvQkQsRUFBRUMsSUFBSSxDQUFOLEtBQVksRUFBaEMsR0FBdUNELEVBQUVDLElBQUksQ0FBTixLQUFZLENBQW5ELEdBQXdERCxFQUFFQyxJQUFJLENBQU4sQ0FEbEQsRUFFTEQsRUFBRUMsSUFBSSxDQUFOLEtBQVksRUFBYixHQUFvQkQsRUFBRUMsSUFBSSxDQUFOLEtBQVksRUFBaEMsR0FBdUNELEVBQUVDLElBQUksQ0FBTixLQUFZLENBQW5ELEdBQXdERCxFQUFFQyxJQUFJLENBQU4sQ0FGbEQsQ0FBUDtBQUlBIiwiZmlsZSI6ImJpZzY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBhIDgtYnl0ZXMgYmlnIGVuZGlhbiBhcnJheSB0byBhIDY0LWJpdCBpbnRlZ2VyIChhbHNvIGJpZyBlbmRpYW4pLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgSW5wdXQgYmlnIGVuZGlhbiBhcnJheS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBvIE9mZnNldCBpbiB0aGUgaW5wdXQgYXJyYXkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSA2NC1iaXQgaW50ZWdlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpZzY0IChhLCBvKSB7XG5cdHJldHVybiBbXG5cdFx0KGFbbyArIDBdIDw8IDI0KSB8IChhW28gKyAxXSA8PCAxNikgfCAoYVtvICsgMl0gPDwgOCkgfCBhW28gKyAzXSxcblx0XHQoYVtvICsgNF0gPDwgMjQpIHwgKGFbbyArIDVdIDw8IDE2KSB8IChhW28gKyA2XSA8PCA4KSB8IGFbbyArIDddXG5cdF0gO1xufVxuIl19