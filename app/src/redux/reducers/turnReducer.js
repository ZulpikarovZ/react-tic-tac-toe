import { CHANGE_TURN, RESET_A_TURN } from '../actionTypes/actionTypes';

const initState = { isXTurn: true };

export const turnReduces = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CHANGE_TURN:
			return { ...state, isXTurn: !payload };

		case RESET_A_TURN:
			return initState;

		default:
			return state;
	}
};
