import React from "react";
import { useSelector } from "react-redux";
import Thumbnail from "./Thumbnail";
import { MOVIE_LOGO_URL } from "../../utils/constants";

const Vedios = () => {
  const vedios = useSelector((store) => store?.movieDetails?.Vedios);
  const movieData = useSelector((store) => store?.movieDetails?.details);

  if (!vedios) return;

  const ytKeys = [];

  vedios.results.map((m) => ytKeys.push(m.key));

  if (!ytKeys) return;

  return (
    <>
      <div className="lg:mx-10  max-lg:mx-12 max-sm:mx-3">
        <div className="text-white  z-10 flex flex-wrap max-lg:flex-col justify-start py-2">
          {ytKeys.map((m) => (
            <Thumbnail ytKey={m} />
          ))}
        </div>
      </div>

      <div className="bg-[#a8a8a8] p-1 bg-opacity-10 backdrop-blur-[5px] rounded-lg lg:mx-6  max-lg:mx-6 max-sm:mx-3 sm:w-[50%] mb-4 pb-4 border-[0px] border-[#393939]">
        <p className="p-2 text-xs"> No © copyright issues </p>
        <div className="flex justify-between">
          <div className="flex flex-col p-2">
            <p>Produced by</p>
            {movieData.production_companies.map((m) => {
              {
                if (m.name) {
                  return (
                    <div className="">
                      <p className="text-[10px]"> {m.name} </p>
                    </div>
                  );
                }
              }
            })}
          </div>
          <div>
            <p className="px-2 py-1 text-xs text-right">contact Developer <br/> for any issues</p>
            <div className="flex flex-row-reverse px-2">
              <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" className="w-5" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Git-icon-white.svg/2048px-Git-icon-white.svg.png" className="w-5 mr-1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vedios;
