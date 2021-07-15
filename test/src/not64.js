import test from 'ava';

import {not64, get64} from '../../src/index.js';

function macro(t, input, expected) {
	input = get64(...input);
	expected = get64(...expected);
	t.deepEqual(not64(input), expected);
	t.deepEqual(input, not64(expected));
	t.deepEqual(not64(not64(input)), input);
}

macro.title = (providedTitle, input, expected) =>
	`${providedTitle || ''} ~${input} === ${expected}`.trim();

test(macro, [0x00_00_00_00, 0x00_00_00_00], [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], [0xff_ff_ff_ff, 0xff_ff_ff_fe]);
test(macro, [0x00_00_00_00, 0x00_00_00_02], [0xff_ff_ff_ff, 0xff_ff_ff_fd]);
