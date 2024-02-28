import test from 'ava';

import {mul3264, get64} from '#module';

function macro(t, A, B, EXPECTED) {
	const expected = get64(...EXPECTED);
	t.deepEqual(mul3264(A, B), expected, 'a * b');
	t.deepEqual(mul3264(B, A), expected, 'b * a');
}

macro.title = (providedTitle, a, b, expected) =>
	`${providedTitle || ''} ${a} * ${b} === ${expected}`.trim();

test(macro, 0x00_00_00_00, 0x00_00_00_00, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, 0x00_00_00_01, 0x00_00_00_00, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, 0x00_00_00_01, 0xff_ff_ff_ff, [0x00_00_00_00, 0xff_ff_ff_ff]);
test(macro, 0x00_00_00_02, 0xff_ff_ff_ff, [0x00_00_00_01, 0xff_ff_ff_fe]);
test(macro, 0x00_00_00_04, 0xff_ff_ff_ff, [0x00_00_00_03, 0xff_ff_ff_fc]);
test(macro, 0xff_ff_ff_ff, 0xff_ff_ff_ff, [0xff_ff_ff_fe, 0x00_00_00_01]);
test(macro, 0x80_00_00_00, 0x80_00_00_00, [0x40_00_00_00, 0x00_00_00_00]);
