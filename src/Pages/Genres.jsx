import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Axios from "axios";

import { Autocomplete, TextField } from "@mui/material";
import { Consumer } from "../Context/Data";

function Genres({ setNavIndx }) {
  const [separator, setSeparator] = useState("%2C");
  const [genres, setGenres] = useState([]);

  const { adult, header } = useContext(Consumer);

  const { type, id } = useParams();

  useEffect(() => {
    type === "movie" ? setNavIndx(0) : setNavIndx(1);

    async function getData() {
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.asc${
          genres.length > 0 ? `&with_genres${genres.join(separator)}` : ""
        }`,
        {
          headers: header,
        }
      ).then(({ data }) => {
        console.log(data.results);
      });
    }
    getData();
  }, [adult, genres]);

  return (
    <div className="pt-28 text-white lg:px-8 md:px-4 px-2">
      <p className="text-5xl font-bold text-orange-500">
        {type === "movie"
          ? "Search Movies by Genre"
          : "Search TV Shows by Genre"}
      </p>
      <p className="text-2xl mt-8">Select your Genre(s)</p>
    </div>
  );
}

export default Genres;
