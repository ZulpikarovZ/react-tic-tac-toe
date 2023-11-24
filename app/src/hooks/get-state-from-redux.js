import { useEffect, useState } from 'react';
import { store } from '../redux/store';

export const useGetStateFromRedux = () => {
	const [state, setState] = useState(store.getState());
	const [onRender, setOnRender] = useState(false);

	const refreshStore = () => setOnRender(!onRender);

	useEffect(() => {
		setState(store.getState());
	}, [onRender]);

	return { state, refreshStore };
};
