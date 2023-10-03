import React from "react";
import useVedioData from "../../hooks/useVedioData";
import { useNavigate } from "react-router-dom";

const YTcard = ({ ytkey }) => {
  const navigate = useNavigate();

  const Data = useVedioData(ytkey);

  const title = Data?.snippet?.localized?.title;
  const thumbnail = Data?.snippet?.thumbnails?.maxres?.url;

  if (!Data?.snippet) return;


  return (
    <div className="flex flex-col max-lg:flex-row">
      {thumbnail && (
        <>
        <div
          onClick={() => {
            navigate("/watch/" + ytkey);
          }}
          className="cursor-pointer"
        >
          <img
            src={thumbnail}
            alt=""
            className="w-72 max-lg:w-56 max-sm:w-64 rounded-md m-1 border-red-900 border-2 "
          />
        </div>
        <p className="w-72 mx-1 text-sm font-semibold text-gray-300 max-lg:pt-2 max-sm:p-0 max-sm:text-xs max-sm:p-1 ">
        {title}
      </p>
        </>
      )}
      {!thumbnail && (
        <>
        <div>
          <div className="w-72 max-lg:w-56 max-sm:w-64 aspect-video border-red-900 border-2 rounded-md m-1 backdrop-blur-[5px] flex items-center justify-center max-sm:hidden ">
            {" "}
            <p className="text-xs font-semibold text-gray-400">
              Thumbnail not Available
            </p>{" "}
          </div>
        </div>
        <p className="w-72 mx-1 text-sm font-semibold text-gray-300 max-lg:pt-2 max-sm:p-0 max-sm:text-xs max-sm:p-1 max-sm:hidden ">
        {title}
      </p>
        </>
      )}

    </div>
  );
};

export default YTcard;
