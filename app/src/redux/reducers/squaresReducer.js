import { TOTAL_SQUARES } from '../../constants';
import { MAKE_A_MOVE, RESET_A_BOARD } from '../actionTypes/actionTypes';

const initState = { squares: Array(TOTAL_SQUARES).fill(null) };

export const squaresReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case MAKE_A_MOVE:
			return { ...state, squares: payload };

		case RESET_A_BOARD:
			return initState;

		default:
			return state;
	}
};
