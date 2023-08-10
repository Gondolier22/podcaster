import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IPodcastItem {
	id: number;
	image: string;
	title: string;
	author: string;
}

// Define a type for the slice state
interface IPodcastsListState {
	items: IPodcastItem[];
	filteredItems: IPodcastItem[];
}

// Define the initial state using that type
const initialState: IPodcastsListState = {
	items: [],
	filteredItems: [],
};

export const podcastsListSlice = createSlice({
	name: 'podcastsList',
	initialState,
	reducers: {
		setList: (state, action: PayloadAction<IPodcastItem[]>) => {
			state.items = [...action.payload];
		},
		setFilteredList: (state, action: PayloadAction<IPodcastItem[]>) => {
			state.filteredItems = [...action.payload];
		},
	},
});

const { actions, reducer } = podcastsListSlice;

export const { setList, setFilteredList } = actions;

export default reducer;
