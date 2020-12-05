import test from 'ava';

import { not64 , get64 } from '../../src' ;

function macro (t, input, expected) {
	input = get64(...input);
	expected = get64(...expected);
	t.deepEqual(not64(input), expected);
	t.deepEqual(input, not64(expected));
	t.deepEqual(not64(not64(input)), input);
}

macro.title = (providedTitle, input, expected) => `${providedTitle || ''} ~${input} === ${expected}`.trim();

test(macro, [0x00000000, 0x00000000], [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0x00000000, 0x00000001], [0xFFFFFFFF, 0xFFFFFFFE]);
test(macro, [0x00000000, 0x00000002], [0xFFFFFFFF, 0xFFFFFFFD]);
