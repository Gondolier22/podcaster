import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPodcastItem } from '../../../common/interfaces/podcast-item';
import { IPodcastEpisode } from '../../../common/interfaces/podcast-episode';

// Define a type for the slice state
interface IPodcastsListState {
	item: IPodcastItem;
	totalEpisodes: number;
	episodes: IPodcastEpisode[];
}

export const defaultPodcast: IPodcastItem = {
	id: 0,
	image: '',
	author: '',
	title: '',
	description: '',
};

// Define the initial state using that type
const initialState: IPodcastsListState = {
	item: { ...defaultPodcast },
	totalEpisodes: 0,
	episodes: [],
};

export const podcastsListSlice = createSlice({
	name: 'selectedPodcast',
	initialState,
	reducers: {
		setPodcast: (state, action: PayloadAction<IPodcastItem>) => {
			state.item = { ...action.payload };
		},
		setTotalEpisodes: (state, action: PayloadAction<number>) => {
			state.totalEpisodes = action.payload;
		},
		setEpisodes: (state, action: PayloadAction<IPodcastEpisode[]>) => {
			state.episodes = [...action.payload];
		},
		clearPodcast: (state) => {
			state.item = { ...defaultPodcast };
			state.totalEpisodes = 0;
			state.episodes = [];
		},
	},
});

const { actions, reducer } = podcastsListSlice;

export const { clearPodcast, setPodcast, setEpisodes, setTotalEpisodes } =
	actions;

export default reducer;
