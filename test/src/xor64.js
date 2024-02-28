import test from 'ava';

import {xor64, get64} from '#module';

function macro(t, a, b, expected) {
	a = get64(...a);
	b = get64(...b);
	expected = get64(...expected);
	t.deepEqual(xor64(a, b), expected);
}

macro.title = (providedTitle, input, expected) =>
	`${providedTitle || ''} ${input} === ${expected}`.trim();

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
	[0xff_ff_ff_ff, 0xff_ff_ff_fe],
);
test(
	macro,
	[0x00_00_00_00, 0x00_00_00_02],
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0xff_ff_ff_ff, 0xff_ff_ff_fd],
);
test(
	macro,
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0xff_ff_ff_ff, 0xff_ff_ff_ff],
	[0x00_00_00_00, 0x00_00_00_00],
);
