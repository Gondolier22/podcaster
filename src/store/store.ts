import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './features/loader/loaderSlice';
import podcastsListReducer from './features/podcastsList/podcastsListSlice';

export const store = configureStore({
	reducer: {
		loader: loaderReducer,
		podcastsList: podcastsListReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
