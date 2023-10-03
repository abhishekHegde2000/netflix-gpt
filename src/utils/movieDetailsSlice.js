import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice(
    {
        name: 'movieDetails',
        initialState: {
            details: null,
            Vedios: null,
            VedioData: null,
            LogoData: null
        },
        reducers:{
            addMovie: (state, action) =>{
                state.details = action.payload
            },
            addMovieVedios:(state, action) =>{
                state.Vedios = action.payload
            },
            addVedioData: (state , action)=>{
                state.VedioData = action.payload
            },
            addLogoData:(state, action)=>{
                state.LogoData = action.payload
            },
            removeMovie: (state, action) =>{
                state.details =null
                state.Vedios = null
                state.LogoData = null
                // state.VedioData = null
            }
        }
    }
)

export const { addMovie, removeMovie, addMovieVedios , addVedioData, addLogoData} = movieDetailsSlice.actions

export default movieDetailsSlice.reducer