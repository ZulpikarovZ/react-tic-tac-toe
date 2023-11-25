import {
	CHANGE_TURN,
	MAKE_A_MOVE,
	RESET_A_BOARD,
	RESET_A_TURN,
} from '../actionTypes/actionTypes';

export const makeAMove = (copySquares) => ({
	type: MAKE_A_MOVE,
	payload: copySquares,
});

export const changeTurn = (isXTurn) => ({
	type: CHANGE_TURN,
	payload: isXTurn,
});

export const restartABoard = () => ({
	type: RESET_A_BOARD,
});

export const resetATurn = () => ({
	type: RESET_A_TURN,
});
