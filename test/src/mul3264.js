import test from 'ava';

import { mul3264 , get64 } from '../../src/index.js' ;

function macro (t, A, B, EXPECTED) {
	const expected = get64(...EXPECTED);
	t.deepEqual(mul3264(A, B), expected, 'a * b');
	t.deepEqual(mul3264(B, A), expected, 'b * a');
}

macro.title = (providedTitle, a, b, expected) => `${providedTitle || ''} ${a} * ${b} === ${expected}`.trim();

test(macro, 0x00000000, 0x00000000, [0x00000000, 0x00000000]);
test(macro, 0x00000001, 0x00000000, [0x00000000, 0x00000000]);
test(macro, 0x00000001, 0xFFFFFFFF, [0x00000000, 0xFFFFFFFF]);
test(macro, 0x00000002, 0xFFFFFFFF, [0x00000001, 0xFFFFFFFE]);
test(macro, 0x00000004, 0xFFFFFFFF, [0x00000003, 0xFFFFFFFC]);
test(macro, 0xFFFFFFFF, 0xFFFFFFFF, [0xFFFFFFFE, 0x00000001]);
test(macro, 0x80000000, 0x80000000, [0x40000000, 0x00000000]);
