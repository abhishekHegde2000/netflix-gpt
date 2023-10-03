import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addVedio } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { addMovieVedios } from "../utils/movieDetailsSlice";

const useMoviesVedio = (id, bg) => {
  const dispatch = useDispatch();

  const Vedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    if (bg) {
      dispatch(addVedio(json));
    }
    if(!bg){
      dispatch(addMovieVedios(json))
    }
  };

  useEffect(() => {
    Vedio();
  }, []);
};

export default useMoviesVedio;
