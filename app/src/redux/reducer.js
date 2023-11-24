import { CHANGE_TURN, GET_SQUARES, MAKE_A_MOVE, RESTART_A_BOARD } from './actions';
import { initState } from './initState';

export const appReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_SQUARES:
			return state;
		case MAKE_A_MOVE:
			return { ...state, squares: payload };
		case CHANGE_TURN:
			return { ...state, isXTurn: !payload };
		case RESTART_A_BOARD:
			return initState;

		default:
			break;
	}
};
