import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import GPTreducer from "./GPTslice"
import movieDetailsReducer from "./movieDetailsSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: GPTreducer,
            movieDetails: movieDetailsReducer
        }
    }
)

export default appStore;