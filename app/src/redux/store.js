import { GET_SQUARES } from './actions';
import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state;

	return {
		dispatch: (action) => {
			state = reducer(state, action);
		},
		getState: () => state,
	};
};

export const store = createStore(appReducer);

store.dispatch({ type: GET_SQUARES });
