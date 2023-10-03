import React from "react";
import VedioBG from "./VedioBG";
import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import usePlayingMovies from "../../hooks/usePlayingMovies";
import useMoviesLogo from "../../hooks/useMoviesLogo";
import useMoviesVedio from "../../hooks/useMoviesVedio";

const Main = () => {
  usePlayingMovies();
  useMoviesLogo(976573);
  useMoviesVedio(976573 , true);

  const movies = useSelector((store) => store.movies);
  const vedioData = movies.Vedio;
  const ytKey = vedioData?.results[5]?.key;

  const logoData = movies.logo;

  if (!movies.playingMovies) return;

  const description = movies.playingMovies[0].overview;

  return (
    <div className="z-10">
      <VedioBG ytKey={ytKey} />
      <VedioTitle logoData={logoData} description={description} />
    </div>
  );
};

export default Main;
