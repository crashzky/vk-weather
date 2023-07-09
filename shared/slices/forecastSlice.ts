import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@shared/store';

type state = null | number;

const forecastSlice = createSlice({
	name: 'forecast',
	initialState: null as state,
	reducers: {
		setActiveForecast(state, action: PayloadAction<state>) {
			return action.payload;
		},
	},
});

export default forecastSlice.reducer;

export const { setActiveForecast } = forecastSlice.actions;

export const selectActiveForecast = (state: RootState): state => state.forecast;
