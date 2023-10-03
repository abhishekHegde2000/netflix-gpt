import React from "react";
import YTcard from "./YTcard";

const Thumbnail = ({ ytKey }) => {


  return (
    <div>
      <YTcard ytkey={ytKey} />
    </div>
  );
};

export default Thumbnail;
