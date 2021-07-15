import test from 'ava';

import {compare, get64} from '../../src/index.js';

function macro(t, A, B, expected) {
	const a = get64(...A);
	const b = get64(...B);
	t.deepEqual(compare(a, b), Number(expected), 'compare(a, b)');
	t.deepEqual(
		compare(b, a),
		expected === 0 ? expected : -expected,
		'compare(b, a)',
	);
}

macro.title = (providedTitle, a, b, expected) =>
	`${providedTitle || ''} compare(${a}, ${b}) === ${expected}`.trim();

test(macro, [0x00_00_00_00, 0x00_00_00_00], [0x00_00_00_00, 0x00_00_00_00], 0);
test(macro, [0x00_00_00_00, 0x00_00_00_01], [0x00_00_00_00, 0x00_00_00_00], 1);
test(macro, [0x00_00_00_00, 0x00_00_00_01], [0xff_ff_ff_ff, 0xff_ff_ff_ff], -1);
test(macro, [0x00_00_00_00, 0x00_00_00_02], [0xff_ff_ff_ff, 0xff_ff_ff_ff], -1);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], [0xff_ff_ff_ff, 0xff_ff_ff_ff], 0);
