import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const playingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=3",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPlayingMovies(json.results));
  };

  useEffect(() => {
    !playingMovies && nowPlayingMovies();
  }, []);
};

export default usePlayingMovies;
