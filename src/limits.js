import {get64} from './get64.js';

/** 0 */
export const min = get64(0x00_00_00_00, 0x00_00_00_00);

/** 2^64 - 1 */
export const max = get64(0xff_ff_ff_ff, 0xff_ff_ff_ff);
