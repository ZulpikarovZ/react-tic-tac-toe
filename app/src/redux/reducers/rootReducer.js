import { combineReducers } from 'redux';
import { squaresReducer } from './squaresReducer';
import { turnReduces } from './turnReducer';

export const rootReducer = combineReducers({
	squaresState: squaresReducer,
	turnState: turnReduces,
});
