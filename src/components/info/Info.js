import React from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMAGE_URL, MOVIE_LOGO_URL } from "../../utils/constants";
import useMoviesVedio from "../../hooks/useMoviesVedio";
import Vedios from "./Vedios";
import MovieDetails from "./MovieDetails";

const Info = () => {
  const params = useParams();

  useMovieDetails(params.infoid);
  useMoviesVedio(params.infoid, false);

  const Data = useSelector((store) => store.movieDetails);

  const movieData = Data.details;
  // console.log(movieData.backdrop_path);

  if (!movieData) return;

  // console.log( ytKeys )

  return (
    <>
    <div>
      <Header />
      <MovieDetails movieData={movieData} />

      <div className="fixed">
        <div className="bg-gradient-to-t w-full aspect-video absolute top-0 from-black z-10"></div>
        <div className="bg-gradient-to-t w-full aspect-video absolute top-1 from-black z-10"></div>

        {movieData.backdrop_path && (
          <img src={IMAGE_URL + movieData.backdrop_path} alt="" />
        )}
      </div>
      
    </div>
    </>
  );
};

export default Info;
