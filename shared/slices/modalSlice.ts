import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@shared/store';
import { IState } from '@models/slices/modal.model';

const initialState: IState = {
	modalName: null,
	payload: null,
};

const slice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal(state, action: PayloadAction<IState>) {
			return action.payload;
		},

		closeModal() {
			return initialState;
		},
	},
});

export default slice.reducer;

export const { openModal, closeModal } = slice.actions;

export const selectActiveModal = (state: RootState): IState => state.modal;
