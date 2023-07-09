import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@shared/store';
import { IState, IPosition, IUpdatePosition } from '@models/slices/positions.model';

export const initialState: IState = {
	initialPosition: null,
	otherPositions: [],
};	

const positionsSlice = createSlice({
	name: 'positions',
	initialState,
	reducers: {
		addInitialPosition(state, action: PayloadAction<Omit<IPosition, 'name'>>) {
			state.initialPosition = {
				name: 'Текущая геопозиция',
				...action.payload,
			};
		},

		addPosition(state, action: PayloadAction<IPosition>) {
			state.otherPositions.push(action.payload);
		},

		removePosition(state, action: PayloadAction<number>) {
			if(!Object.keys(state.otherPositions).includes(action.payload.toString()))
				throw new Error('An position with this id does not exist!');

			state.otherPositions.splice(action.payload, 1);
		},

		updatePostition(state, action: PayloadAction<IUpdatePosition>) {
			if(!Object.keys(state.otherPositions).includes(action.payload.id.toString()))
				throw new Error('An position with this id does not exist!');

			state.otherPositions[action.payload.id] = action.payload.position;
		},
	},
});

export default positionsSlice.reducer;

export const { addInitialPosition, addPosition, removePosition, updatePostition } = positionsSlice.actions;

export const selectInitialPosition = (state: RootState): IState['initialPosition'] => state.positions.initialPosition;
export const selectOtherPositions = (state: RootState): IState['otherPositions'] => state.positions.otherPositions;
export const selectOtherPositionById = (state: RootState, positionId: number): IPosition =>
	state.positions.otherPositions[positionId];
	
