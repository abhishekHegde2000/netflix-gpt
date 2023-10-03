import React from "react";
import useMoviesLogo from "../../hooks/useMoviesLogo";
import { useSelector } from "react-redux";
import { MOVIE_LOGO_URL } from "../../utils/constants";
import Vedios from "./Vedios";

const MovieDetails = ({ movieData }) => {
  console.log(movieData);

  useMoviesLogo(movieData?.id, true);

  const Data = useSelector((store) => store.movieDetails.LogoData);

  if (!Data) return;
  console.log(movieData.genres);

  return (
    <>
      <div className="text-white absolute z-10 w-screen">
        <div className="lg:mx-6  max-lg:mx-6 max-sm:mx-3 mt-[20%] max-sm:mt-[40%] mb-0">
          {Data.logos && (
            <img
              src={MOVIE_LOGO_URL + Data.logos[0]?.file_path}
              className="   w-[30%] max-sm:w-[50%] "
              alt=""
            />
          )}

          <p className="text-xs font-semibold text-[#9f9f9f] w-[50%] max-sm:w-full p-3 mt-2 rounded-xl bg-opacity-20 backdrop-blur-[5px] bg-[#6d6d6d]">
            {movieData.overview}
          </p>
          {movieData.genres.map((m) => (
            <button className="bg-[#6d6d6d] bg-opacity-25 p-2 px-3 backdrop-blur-[1px] rounded-full text-xs mr-1 mt-2 cursor-default ">
              {m.name}
            </button>
          ))}
          {movieData.spoken_languages.map((m) => (
            <button className="bg-[#6d6d6d] bg-opacity-25 p-2 px-3 backdrop-blur-[1px] rounded-full text-xs mr-1 mt-2 cursor-default ">
              {m.name}
            </button>
          ))}
        </div>

        <Vedios />

      </div>
    </>
  );
};

export default MovieDetails;
