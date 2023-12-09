import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mySongs: [],
	currentSong: 0,
	isPlaying: false,
	currentTime: 0,
	duration: 0,
	isSongLoading: false,
};

export const musicSlice = createSlice({
	name: 'music-store',
	initialState,
	reducers: {
		addAudioSong: (state, action) => {
			state.mySongs = action.payload;
		},
		next: (state) => {
			state.currentSong = (state.currentSong + 1) % state.mySongs.length;
		},
		prev: (state) => {
			state.currentSong =
				(state.currentSong - 1 + state.mySongs.length) %
				state.mySongs.length;
		},
		setCurrentSong: (state, action) => {
			state.currentSong = action.payload;
		},
		setIsPlaying: (state, action) => {
			state.isPlaying = action.payload;
		},
		setCurrentTime: (state, action) => {
			state.currentTime = action.payload;
		},
		setDuration: (state, action) => {
			state.duration = action.payload;
		},
		setIsSongLoading: (state, action) => {
			state.isSongLoading = action.payload;
		},
	},
});

export default musicSlice.reducer;
export const {
	addAudioSong,
	next,
	prev,
	setCurrentSong,
	setIsPlaying,
	setCurrentTime,
	setDuration,
	setIsSongLoading,
} = musicSlice.actions;
