import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="m-6 max-lg:m-3 " >
      <div  >
        <p className="text-white mx-1 font-sans font-light py-2 max-lg:py-0  text-xl max-lg:text-sm " >{title}</p>
        <div className="flex overflow-x-scroll edit-schroll " >
          {movies.map((movies) =>(<MovieCard path={movies.poster_path} key={movies.id} id={movies.id}  large={false} />) )}
          <div className="bg-gradient-to-l from-black w-56 max-sm:w-12 max-lg:w-20 h-60 z-10 absolute right-0 mr-6 max-sm:mr-3 max-lg:mr-3 "></div>

        </div>

      </div>
    </div>
  );
};

export default MovieList;
