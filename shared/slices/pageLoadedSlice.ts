import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@shared/store';

const pageLoadedSlice = createSlice({
	name: 'pageLoaded',
	initialState: false,
	reducers: {
		setPageLoaded() {
			return true;
		},
	},
});

export default pageLoadedSlice.reducer;

export const { setPageLoaded } = pageLoadedSlice.actions;

export const selectPageLoaded = (state: RootState): boolean => state.pageLoaded;
