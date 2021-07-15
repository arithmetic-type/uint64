import test from 'ava';

import {min, max, get64} from '../../src/index.js';

function macro(t, input, expected) {
	const b = get64(...expected);
	t.deepEqual(input, b);
}

macro.title = (providedTitle, input, expected) =>
	`${providedTitle || ''} ${input} === ${expected}`.trim();

test(macro, min, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, max, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
