import { Middleware } from '@reduxjs/toolkit';

import { RootState } from '@shared/store';

const cacheMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);

	const localState = JSON.parse(JSON.stringify(store.getState())) as RootState;
	const sessionState = {
		positions: {
			initialPosition: localState.positions.initialPosition,
		},
	};

	localState.positions.initialPosition = null;
	localState.pageLoaded = false;
	localState.forecast = null;
	localState.modal.modalName = null;
	localState.modal.payload = null;

	localStorage.setItem('reduxState', JSON.stringify(localState));
	sessionStorage.setItem('reduxState', JSON.stringify(sessionState));
};

export default cacheMiddleware;
