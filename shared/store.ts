import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { default as modalReducer } from '@shared/slices/modalSlice';

const store = configureStore({
	reducer: {
		modal: modalReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
