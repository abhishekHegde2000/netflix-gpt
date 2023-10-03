import React, { useRef, useState } from "react";
import openai from "../../utils/openAI";
import searchMovies from "../../hooks/searchMovies";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../../utils/GPTslice";


const GPTinput = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //   const searchMovies = useSearchMovies()


  const handleClick = async () => {

    console.log(searchText.current.value);


    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovies(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  

  return (
    <>
      <div className="mt-44 mx-44 max-sm:mx-4">
        <form
          className="form-control flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full">
            <input
              ref={searchText}
              className="input input-alt max-sm:h-12 max-sm:text-sm max-sm:font-semibold bg-black"
              placeholder="Type something intelligent"
              required=""
              type="text"
            />
            <span className="input-border input-border-alt" />
          </div>
          <button
            className="text-white bg-[#000000] px-3"
            onClick={handleClick}
          >
            <img
              src="https://elearning4lawyers.com/wp-content/uploads/2020/02/search.png"
              width={40}
              alt=""
            />
          </button>
        </form>
      </div>

    </>
  );
};

export default GPTinput;
