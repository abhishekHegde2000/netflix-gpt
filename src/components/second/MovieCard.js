import React from "react";

import { POSTER_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ path, large, id }) => {
  const navigate = useNavigate()
  if (!path) return;



  return (
    <>
      {!large && (
        <img
          src={POSTER_URL + path}
          alt="poster here "
          className="w-36 max-lg:w-24  mx-1 my-1 rounded cursor-pointer inline-block"
          onClick={()=> { navigate( "/info/"+ id ) }}
        />
      )}

      {large && <img src={POSTER_URL + path} onClick={()=> { navigate( "/info/"+ id ) }} className="w-56 max-lg:w-36  mx-1 my-1 rounded cursor-pointer inline-block" alt="" />}
    </>
  );
};

export default MovieCard;
