import React from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import VedioPlayer from "./VedioPlayer";
import useVedioData from "../../hooks/useVedioData";
import VedioDetails from "./VedioDetails";

const Watch = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      <VedioPlayer />
      <VedioDetails />
    </div>
  );
};

export default Watch;
