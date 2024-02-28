import test from 'ava';

import {shl64, get64} from '#module';

function macro(t, a, s, expected) {
	a = get64(...a);
	expected = get64(...expected);
	t.deepEqual(shl64(a, s), expected);
}

macro.title = (providedTitle, a, s, expected) =>
	`${providedTitle || ''} ${a} << ${s} === ${expected}`.trim();

test(macro, [0x00_00_00_00, 0x00_00_00_00], 0, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_00], 53, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 1, [0x00_00_00_00, 0x00_00_00_02]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 60, [0x10_00_00_00, 0x00_00_00_00]);
test(macro, [0x80_00_00_00, 0x00_00_00_00], 1, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x80_00_00_00, 0x00_00_00_00], 60, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 0, [0x00_00_00_00, 0x00_00_00_01]);
test(macro, [0x00_00_00_00, 0x00_00_00_02], 0, [0x00_00_00_00, 0x00_00_00_02]);
test(macro, [0x00_00_00_01, 0x00_00_00_00], 0, [0x00_00_00_01, 0x00_00_00_00]);
test(macro, [0x00_00_00_02, 0x00_00_00_00], 0, [0x00_00_00_02, 0x00_00_00_00]);

test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 0, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 4, [0xff_ff_ff_ff, 0xff_ff_ff_f0]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 8, [0xff_ff_ff_ff, 0xff_ff_ff_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 12, [0xff_ff_ff_ff, 0xff_ff_f0_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 16, [0xff_ff_ff_ff, 0xff_ff_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 20, [0xff_ff_ff_ff, 0xff_f0_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 24, [0xff_ff_ff_ff, 0xff_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 28, [0xff_ff_ff_ff, 0xf0_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 32, [0xff_ff_ff_ff, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 36, [0xff_ff_ff_f0, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 40, [0xff_ff_ff_00, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 44, [0xff_ff_f0_00, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 48, [0xff_ff_00_00, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 52, [0xff_f0_00_00, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 56, [0xff_00_00_00, 0x00_00_00_00]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 60, [0xf0_00_00_00, 0x00_00_00_00]);
// This is how << 32 behaves in javascript
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 64, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);

test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 0, [0x01_23_45_67, 0x89_ab_cd_ef]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 4, [0x12_34_56_78, 0x9a_bc_de_f0]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 8, [0x23_45_67_89, 0xab_cd_ef_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 12, [0x34_56_78_9a, 0xbc_de_f0_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 16, [0x45_67_89_ab, 0xcd_ef_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 20, [0x56_78_9a_bc, 0xde_f0_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 24, [0x67_89_ab_cd, 0xef_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 28, [0x78_9a_bc_de, 0xf0_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 32, [0x89_ab_cd_ef, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 36, [0x9a_bc_de_f0, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 40, [0xab_cd_ef_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 44, [0xbc_de_f0_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 48, [0xcd_ef_00_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 52, [0xde_f0_00_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 56, [0xef_00_00_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 60, [0xf0_00_00_00, 0x00_00_00_00]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 64, [0x01_23_45_67, 0x89_ab_cd_ef]);
