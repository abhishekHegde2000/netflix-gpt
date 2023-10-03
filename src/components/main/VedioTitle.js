import React from "react";
import { MOVIE_LOGO_URL } from "../../utils/constants";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./VedioTitle.css";
import Second from "../second/Second";

const VedioTitle = ({ logoData, description }) => {
  return (
    <>
      <div className="absolute top-0 z-30 mt-[20%] max-sm:mt-[40%]">
        <div>
          <p className="text-gray-400 text-sm w-80 p-6 font-normal max-sm:hidden">
            {description}
          </p>
          <img
            src={MOVIE_LOGO_URL + logoData?.logos[47]?.file_path}
            alt="movie logo here"
            className="w-80 zoom m-6 hover:w-96 max-sm:hidden"
          />
          <img
            src={MOVIE_LOGO_URL + logoData?.logos[47]?.file_path}
            alt="movie logo here"
            className="w-52 zoom m-6 sm:hidden"
          />
          <div className="flex ">
            <div className="flex flex-row w-40 justify-between mx-6 max-sm:flex-col max-sm:w-28">
              <AwesomeButton
                type="primary"
                after={
                  <img
                    src="https://svgsilh.com/svg_v2/1718976.svg"
                    width={20}
                    alt=""
                  />
                }
              >
                Play{" "}
              </AwesomeButton>
              <a href="#movies">
                <button className="bg-white opacity-80 h-10 text-black px-6 rounded max-sm:text-xs max-sm:mt-2 max-sm:py-2">
                  Info
                </button>
              </a>
            </div>
            <p className="text-gray-500 text-[10px] sm:hidden  pr-3">
              {description}
            </p>
          </div>
        </div>

        <Second />
      </div>
      <div className="absolute top-0 aspect-video w-full bg-gradient-to-t from-black max-xl:hidden"></div>
      <div className="absolute top-0 aspect-video w-full bg-gradient-to-t from-black"></div>
    </>
  );
};

export default VedioTitle;
