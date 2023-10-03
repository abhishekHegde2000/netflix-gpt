import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieDetailsSlice";

const useMovieDetails = async (movieid) => {
  const dispatch = useDispatch();

  const data = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieid,
      API_OPTIONS
    );
    const json = await data.json();

    dispatch( addMovie(json) )
  };

  

  useEffect(() => {
    data();
  }, []);


};

export default useMovieDetails;
