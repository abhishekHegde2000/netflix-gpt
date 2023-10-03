import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addVedioData } from "../utils/movieDetailsSlice";

const useVedioData = (ytKey) => {
  const dispatch = useDispatch();
  const [finalData, setfinalData] = useState();

  const vedioData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + ytKey + "&key=" +"AIzaSyC8IAKgJuC0OET2YiiE229To56VicC6gZE"
    );
    const json = await data.json();
    setfinalData(json.items[0]);
  };

  useEffect(() => {
    vedioData();
  }, []);

  return finalData;
};

export default useVedioData;

