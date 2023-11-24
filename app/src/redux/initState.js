import { TOTAL_SQUARES } from '../constants';

export const initState = {
	squares: Array(TOTAL_SQUARES).fill(null),
	isXTurn: true,
};
