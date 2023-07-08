import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@shared/store';

interface State {
	modalName: string | null;
	payload: any;
}

const initialState: State = {
	modalName: null,
	payload: null,
};

const slice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal(state, action: PayloadAction<State>) {
			return action.payload;
		},

		closeModal() {
			return initialState;
		},
	},
});

export default slice.reducer;

export const { openModal, closeModal } = slice.actions;

export const selectActiveModal = (state: RootState): State => state.modal;
