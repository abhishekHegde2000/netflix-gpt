import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "gpt",
  initialState: {
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGPTresults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, removeGPTresults } = GPTslice.actions;

export default GPTslice.reducer;
