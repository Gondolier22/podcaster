import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface LoaderState {
	isLoading: boolean;
}

// Define the initial state using that type
const initialState: LoaderState = {
	isLoading: false,
};

export const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		endLoading: (state) => {
			state.isLoading = false;
		},
	},
});

const { actions, reducer } = loaderSlice;

export const { startLoading, endLoading } = actions;

export default reducer;
