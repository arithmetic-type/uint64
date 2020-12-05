import test from 'ava';

import { add64 , get64 } from '../../src' ;

function macro (t, A, B, EXPECTED) {
	const a = get64(...A);
	const b = get64(...B);
	const expected = get64(...EXPECTED);
	t.deepEqual(add64(a, b), expected, 'a + b');
	t.deepEqual(add64(b, a), expected, 'b + a');
}

macro.title = (providedTitle, a, b, expected) => `${providedTitle || ''} ${a} + ${b} === ${expected}`.trim();

test(macro, [0x00000000, 0x00000000], [0x00000000, 0x00000000], [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x00000001], [0x00000000, 0x00000000], [0x00000000, 0x00000001]);
test(macro, [0x00000000, 0x00000001], [0xFFFFFFFF, 0xFFFFFFFF], [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x00000002], [0xFFFFFFFF, 0xFFFFFFFF], [0x00000000, 0x00000001]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], [0xFFFFFFFF, 0xFFFFFFFF], [0xFFFFFFFF, 0xFFFFFFFE]);
test(macro, [0x80000000, 0x00000000], [0x80000000, 0x00000000], [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x80000000], [0x00000000, 0x80000000], [0x00000001, 0x00000000]);
test(macro, [0x80000000, 0x80000000], [0x80000000, 0x80000000], [0x00000001, 0x00000000]);
