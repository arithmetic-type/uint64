import test from 'ava';

import { compare , get64 } from '../../src' ;

function macro (t, a, b, expected) {
	a = get64(...a);
	b = get64(...b);
	t.deepEqual(compare(a, b), expected);
}

macro.title = (providedTitle, a, b, expected) => `${providedTitle} compare(${a}, ${b}) === ${expected}`.trim();

test(macro, [0x00000000, 0x00000000], [0x00000000, 0x00000000], 0);
test(macro, [0x00000000, 0x00000001], [0x00000000, 0x00000000], 1);
test(macro, [0x00000000, 0x00000001], [0xFFFFFFFF, 0xFFFFFFFF], -1);
test(macro, [0x00000000, 0x00000002], [0xFFFFFFFF, 0xFFFFFFFF], -1);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], [0xFFFFFFFF, 0xFFFFFFFF], 0);
