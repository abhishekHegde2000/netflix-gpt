import React from "react";
import useVedioData from "../../hooks/useVedioData";
import { useParams } from "react-router-dom";

const VedioDetails = () => {
  const params = useParams();
  const ytkey = params.waid;
  const Data = useVedioData(ytkey);
  const title = Data?.snippet?.localized?.title;
  const authorName = Data?.snippet?.channelTitle;
  const description1 = Data?.snippet?.description;
  const date = Data?.snippet?.publishedAt;
  const tags = Data?.snippet?.tags;

  
  
  function replaceJsx(str) {
    return str.split("\n");
  }

if( !description1 ) return

  const description = replaceJsx(description1);
  //   console.log(description);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const year = date.getFullYear();
    return `${day}${
      day > 10 && day < 20 ? "th" : ["st", "nd", "rd"][(day % 10) - 1] || "th"
    }, ${month}, ${year}`;
  }

  const actualDate = formatDate(date);

  //   console.log(tags);
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[70%] max-sm:w-screen m-2 ">
        <p className="text-white text-xl font-semibold">{title}</p>
        <div className="flex justify-between">
          <button className="text-black text-sm font-semibold bg-[#d3d3d3] p-2 px-4 mt-2 rounded-full  max-sm:p-2 max-sm:px-4 text-xs">
            {authorName}
          </button>
          <button className="text-white text-xs font-semibold bg-[#000000] p-2 px-4 mt-2 rounded-full  max-sm:p-1 max-sm:px-2">
            <p className="sm:inline-block text-gray-500 max-sm:text-xs">uploaded on </p> {actualDate}
          </button>
        </div>
        <div className="bg-[#262626] px-4 py-2 my-2 rounded-3xl">
          {tags && tags.map((m) => (
            <p className="inline-block pr-1 text-blue-500 text-xs font-semibold">
              {"#" + m}{" "}
            </p>
          ))}
          <div className="mt-2">
            {description1 && description.map((m) => (
              <p className="text-white text-xs font-semibold mb-4"> {m} </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioDetails;
