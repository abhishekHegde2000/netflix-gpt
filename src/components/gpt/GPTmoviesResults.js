import React from "react";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../../utils/constants";
import MovieCard from "../second/MovieCard";

const GPTmoviesResults = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieResults) return null;

  const posterPaths = [];

  movieResults.map((m) => {
    m.map((me) => posterPaths.push({ posterPath: me.poster_path, key: me.id }));
  });

  console.log(posterPaths);
  
  return (
    <>

      <div className="flex flex-wrap justify-center max-sm:mx-0 max-sm:my-2  mx-12 my-10 ">
        {posterPaths.map((p) => (
          <MovieCard path={p.posterPath} key={p.key} id={p.key} large={true} />
        ))}


        {/* <div className="bg-gradient-to-r from-black w-56  h-96 z-10 absolute left-0-0 mr-12 "></div>
        <div className="bg-gradient-to-l from-black w-56  h-96 z-10 absolute right-0 mr-12 "></div> */}
    </div>
    </>
  );
};

export default GPTmoviesResults;
