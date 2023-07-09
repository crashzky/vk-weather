import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import modalReducer from '@shared/slices/modalSlice';
import positionReducer from '@shared/slices/positionsSlice';
import pageLoadedReducer from '@shared/slices/pageLoadedSlice';
import forecastReducer from '@shared/slices/forecastSlice';

import cacheMiddleware from '@shared/cacheMiddleware';
import preloadState from '@shared/preloadState';

const store = configureStore({
	reducer: {
		modal: modalReducer,
		positions: positionReducer,
		pageLoaded: pageLoadedReducer,
		forecast: forecastReducer,
	},
	preloadedState: preloadState(),
	middleware: [cacheMiddleware],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
