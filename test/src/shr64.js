import test from 'ava';

import {shr64, get64} from '../../src/index.js';

function macro(t, a, s, expected) {
	a = get64(...a);
	expected = get64(...expected);
	t.deepEqual(shr64(a, s), expected);
}

macro.title = (providedTitle, a, s, expected) =>
	`${providedTitle || ''} ${a} >>> ${s} === ${expected}`.trim();

test(macro, [0x00_00_00_00, 0x00_00_00_00], 0, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_00], 53, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 1, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 60, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x80_00_00_00, 0x00_00_00_00], 1, [0x40_00_00_00, 0x00_00_00_00]);
test(macro, [0x80_00_00_00, 0x00_00_00_00], 60, [0x00_00_00_00, 0x00_00_00_08]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 0, [0x00_00_00_00, 0x00_00_00_01]);
test(macro, [0x00_00_00_00, 0x00_00_00_02], 0, [0x00_00_00_00, 0x00_00_00_02]);
test(macro, [0x00_00_00_01, 0x00_00_00_00], 0, [0x00_00_00_01, 0x00_00_00_00]);
test(macro, [0x00_00_00_02, 0x00_00_00_00], 0, [0x00_00_00_02, 0x00_00_00_00]);

test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 0, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 4, [0x0f_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 8, [0x00_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 12, [0x00_0f_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 16, [0x00_00_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 20, [0x00_00_0f_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 24, [0x00_00_00_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 28, [0x00_00_00_0f, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 32, [0x00_00_00_00, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 36, [0x00_00_00_00, 0x0f_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 40, [0x00_00_00_00, 0x00_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 44, [0x00_00_00_00, 0x00_0f_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 48, [0x00_00_00_00, 0x00_00_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 52, [0x00_00_00_00, 0x00_00_0f_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 56, [0x00_00_00_00, 0x00_00_00_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 60, [0x00_00_00_00, 0x00_00_00_0f]);
// This is how >>> 32 behaves in javascript
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 64, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);

test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 0, [0x01_23_45_67, 0x89_ab_cd_ef]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 4, [0x00_12_34_56, 0x78_9a_bc_de]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 8, [0x00_01_23_45, 0x67_89_ab_cd]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 12, [0x00_00_12_34, 0x56_78_9a_bc]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 16, [0x00_00_01_23, 0x45_67_89_ab]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 20, [0x00_00_00_12, 0x34_56_78_9a]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 24, [0x00_00_00_01, 0x23_45_67_89]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 28, [0x00_00_00_00, 0x12_34_56_78]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 32, [0x00_00_00_00, 0x01_23_45_67]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 36, [0x00_00_00_00, 0x00_12_34_56]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 40, [0x00_00_00_00, 0x00_01_23_45]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 44, [0x00_00_00_00, 0x00_00_12_34]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 48, [0x00_00_00_00, 0x00_00_01_23]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 52, [0x00_00_00_00, 0x00_00_00_12]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 56, [0x00_00_00_00, 0x00_00_00_01]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 60, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 64, [0x01_23_45_67, 0x89_ab_cd_ef]);
