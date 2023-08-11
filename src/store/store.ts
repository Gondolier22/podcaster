import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './features/loader/loaderSlice';
import podcastsListReducer from './features/podcasts-list/podcastsListSlice';
import selectedPodcastReducer from './features/selected-podcast/selected-podcast';

export const store = configureStore({
	reducer: {
		loader: loaderReducer,
		podcastsList: podcastsListReducer,
		selectedPodcast: selectedPodcastReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
