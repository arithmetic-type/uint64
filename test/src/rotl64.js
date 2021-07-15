import test from 'ava';

import {rotl64, get64} from '../../src/index.js';

function macro(t, expected, s, a) {
	a = get64(...a);
	expected = get64(...expected);
	t.deepEqual(rotl64(a, s), expected);
}

macro.title = (providedTitle, expected, s, a) =>
	`${providedTitle || ''} ${a} rotl ${s} === ${expected}`.trim();

test(macro, [0x00_00_00_00, 0x00_00_00_00], 0, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_00], 53, [0x00_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 1, [0x80_00_00_00, 0x00_00_00_00]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 60, [0x00_00_00_00, 0x00_00_00_10]);
test(macro, [0x00_00_00_00, 0x00_00_00_01], 0, [0x00_00_00_00, 0x00_00_00_01]);
test(macro, [0x00_00_00_00, 0x00_00_00_02], 0, [0x00_00_00_00, 0x00_00_00_02]);

test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 0, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 4, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 8, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 12, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 16, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 20, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 24, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 28, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 32, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 36, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 40, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 44, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 48, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 52, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 56, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 60, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);
test(macro, [0xff_ff_ff_ff, 0xff_ff_ff_ff], 64, [0xff_ff_ff_ff, 0xff_ff_ff_ff]);

test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 0, [0x01_23_45_67, 0x89_ab_cd_ef]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 4, [0xf0_12_34_56, 0x78_9a_bc_de]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 8, [0xef_01_23_45, 0x67_89_ab_cd]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 12, [0xde_f0_12_34, 0x56_78_9a_bc]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 16, [0xcd_ef_01_23, 0x45_67_89_ab]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 20, [0xbc_de_f0_12, 0x34_56_78_9a]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 24, [0xab_cd_ef_01, 0x23_45_67_89]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 28, [0x9a_bc_de_f0, 0x12_34_56_78]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 32, [0x89_ab_cd_ef, 0x01_23_45_67]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 36, [0x78_9a_bc_de, 0xf0_12_34_56]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 40, [0x67_89_ab_cd, 0xef_01_23_45]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 44, [0x56_78_9a_bc, 0xde_f0_12_34]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 48, [0x45_67_89_ab, 0xcd_ef_01_23]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 52, [0x34_56_78_9a, 0xbc_de_f0_12]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 56, [0x23_45_67_89, 0xab_cd_ef_01]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 60, [0x12_34_56_78, 0x9a_bc_de_f0]);
test(macro, [0x01_23_45_67, 0x89_ab_cd_ef], 64, [0x01_23_45_67, 0x89_ab_cd_ef]);
