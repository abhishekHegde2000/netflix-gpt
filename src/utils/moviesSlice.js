import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            playingMovies: null,
            Vedio: null,
            logo: null,
        },
        reducers: {
            addPlayingMovies: (state, action) =>{
                state.playingMovies = action.payload;
            },
            addLogo: (state, action) =>{
                state.logo = action.payload;
            },
            addVedio: (state, action) =>{
                state.Vedio = action.payload;
            },
            removeMovieList: (state) =>{
                state.playingMovies = null
                state.logo = null
                state.Vedio = null
            }
        }
    }
)

export const { addPlayingMovies , addLogo , addVedio , removeMovieList } = moviesSlice.actions

export default moviesSlice.reducer;

