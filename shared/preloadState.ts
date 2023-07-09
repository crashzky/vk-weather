import { RootState } from '@shared/store';

import { initialState as positionsInitialState } from '@shared/slices/positionsSlice';

const preloadState = (): Object => {
	if(typeof window === 'undefined')
		return {};
		
	const localStateRaw = localStorage.getItem('reduxState');
	const sessionStateRaw = sessionStorage.getItem('reduxState');

	if(!localStateRaw && !sessionStateRaw)
		return {};
	
	const localState: RootState = JSON.parse(localStateRaw as string) || {};

	if(sessionStateRaw) {
		const sessionState: Partial<RootState> = JSON.parse(sessionStateRaw as string);

		localState.positions = Object.assign({ ...positionsInitialState }, localState.positions, sessionState.positions);
	}

	return localState;
};

export default preloadState;
