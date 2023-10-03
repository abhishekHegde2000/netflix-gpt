import React from "react";
import Header from "../Header";
import GPTinput from "./GPTinput";
import GPTmoviesResults from "./GPTmoviesResults";

const GPTmain = () => {
  return (
    <div>
      <Header />
      <GPTinput/>
      <GPTmoviesResults/>
    </div>
  );
};

export default GPTmain;
