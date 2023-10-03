import React from "react";
import { useParams } from "react-router-dom";

const VedioPlayer = () => {
const params = useParams()

const ytKey = params.waid



  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] max-sm:w-full mt-[5%] max-sm:mt-[12%] drop-shadow-[0_35px_35px_rgba(1,1,1,0.25)]">
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            ytKey +
            "?rel=0&autoplay=1&modestbranding=1&showinfo=0&loop=1&playlist=" +
            ytKey
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VedioPlayer;
