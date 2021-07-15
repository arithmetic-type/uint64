import test from 'ava';

import {add64, get64} from '../../src/index.js';

function macro(t, A, B, EXPECTED) {
	const a = get64(...A);
	const b = get64(...B);
	const expected = get64(...EXPECTED);
	t.deepEqual(add64(a, b), expected, 'a + b');
	t.deepEqual(add64(b, a), expected, 'b + a');
}

macro.title = (providedTitle, a, b, expected) =>
	`${providedTitle || ''} ${a} + ${b} === ${expected}`.trim();

test(
	macro,
	[0x00_00_00_00, 0x00_00_00_00],
	[0x00_00_00_00, 0x00_00_00_00],
	[0x00_00_00_00, 0x00_00_00_00],
);
test(
	macro,
	[0x00_00_00_00, 0x00_00_00_01],
	[0x00_00_00_00, 0x00_00_00_00],
	[0x00_00_00_00, 0x00_00_00_01],
);
test(
	macro,
	[0x00_00_00_00, 0x00_00_00_01],
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0x00_00_00_00, 0x00_00_00_00],
);
test(
	macro,
	[0x00_00_00_00, 0x00_00_00_02],
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0x00_00_00_00, 0x00_00_00_01],
);
test(
	macro,
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0xff_ff_ff_ff, 0xff_ff_ff_fe],
);
test(
	macro,
	[0x80_00_00_00, 0x00_00_00_00],
	[0x80_00_00_00, 0x00_00_00_00],
	[0x00_00_00_00, 0x00_00_00_00],
);
test(
	macro,
	[0x00_00_00_00, 0x80_00_00_00],
	[0x00_00_00_00, 0x80_00_00_00],
	[0x00_00_00_01, 0x00_00_00_00],
);
test(
	macro,
	[0x80_00_00_00, 0x80_00_00_00],
	[0x80_00_00_00, 0x80_00_00_00],
	[0x00_00_00_01, 0x00_00_00_00],
);
