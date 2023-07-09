import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { default as modalReducer } from '@shared/slices/modalSlice';
import { default as positionReducer } from '@shared/slices/positionsSlice';
import { default as pageLoadedReducer } from '@shared/slices/pageLoadedSlice';

import cacheMiddleware from '@shared/cacheMiddleware';
import preloadState from '@shared/preloadState';

const store = configureStore({
	reducer: {
		modal: modalReducer,
		positions: positionReducer,
		pageLoaded: pageLoadedReducer,
	},
	preloadedState: preloadState(),
	middleware: [cacheMiddleware],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
