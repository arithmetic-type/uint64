import test from 'ava';

import { and64 , get64 } from '../../src' ;

function macro (t, a, b, expected) {
	a = get64(...a);
	b = get64(...b);
	expected = get64(...expected);
	t.deepEqual(and64(a, b), expected);
}

macro.title = (providedTitle, a, b, expected) => `${providedTitle} ${a} & ${b} === ${expected}`.trim();

test(macro, [0x00000000, 0x00000000], [0x00000000, 0x00000000], [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x00000001], [0x00000000, 0x00000000], [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x00000001], [0xFFFFFFFF, 0xFFFFFFFF], [0x00000000, 0x00000001]);
test(macro, [0x00000000, 0x00000002], [0xFFFFFFFF, 0xFFFFFFFF], [0x00000000, 0x00000002]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], [0xFFFFFFFF, 0xFFFFFFFF], [0xFFFFFFFF, 0xFFFFFFFF]);
