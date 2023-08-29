import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Autocomplete, TextField } from "@mui/material";

function Genres({ setNavIndx }) {
  const { type } = useParams();

  useEffect(() => {
    type === "movie" ? setNavIndx(0) : setNavIndx(1);
  });

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
