import test from 'ava';

import {big64, get64} from '#module';

function macro(t, a, o, expected) {
	expected = get64(...expected);
	t.deepEqual(big64(a, o), expected);
}

macro.title = (providedTitle, a, o, expected) =>
	`${providedTitle || ''} big64(${a}, ${o}) === ${expected}`.trim();

test(
	macro,
	[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	0,
	[0x00_00_00_00, 0x00_00_00_00],
);
test(
	macro,
	[0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	0,
	[0xff_00_00_00, 0x00_00_00_00],
);
test(
	macro,
	[0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00],
	0,
	[0xff_ff_ff_ff, 0xff_ff_ff_00],
);
test(
	macro,
	[0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
	0,
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
);
test(
	macro,
	[0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00],
	0,
	[0x00_00_ff_00, 0x00_00_00_00],
);
test(
	macro,
	[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00],
	0,
	[0x00_00_00_00, 0x00_00_01_00],
);
test(
	macro,
	[0x00, 0x00, 0x00, 0xa0, 0x00, 0x00, 0x00, 0x00],
	0,
	[0x00_00_00_a0, 0x00_00_00_00],
);
test(
	macro,
	[0x00, 0x00, 0x00, 0xa0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x0c],
	1,
	[0x00_00_a0_00, 0x00_00_00_03],
);
