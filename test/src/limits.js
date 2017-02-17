import test from 'ava';

import { min , max } from '../../src' ;

function macro (t, input, expected) {
	t.deepEqual(input, expected);
}

macro.title = (providedTitle, input, expected) => `${providedTitle} ${input} === ${expected}`.trim();

test(macro, min, [0x00000000, 0x00000000]);
test(macro, max, [0xFFFFFFFF, 0xFFFFFFFF]);
