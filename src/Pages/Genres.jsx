import { useState, useEffect, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

import Axios from "axios";

import {
  Autocomplete,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ConsumerEffect, ConsumerJSX } from "../Context/Data";

function Genres({ setNavIndx }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [false]
  );

  const { adult, header } = useContext(ConsumerEffect);
  const { type, id } = useParams();

  const [separator, setSeparator] = useState("%2C");
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [genreOpts, setGenreOpts] = useState([]);

  useEffect(() => {
    type === "movie" ? setNavIndx(0) : setNavIndx(1);

    Axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
      headers: header,
    }).then(({ data }) => setGenreOpts(data.genres));
  }, [false]);

  useEffect(() => {
    async function getData() {
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc${
          genres.length > 0
            ? `&with_genres=${genres.map((genre) => genre.id).join(separator)}`
            : ""
        }`,
        {
          headers: header,
        }
      ).then(({ data }) => {
        console.log(data.results[0].title);
      });
    }
    getData();
  }, [adult, genres]);

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-28 text-white lg:px-8 md:px-4 px-2">
        <p className="text-5xl font-bold text-orange-500">
          {type === "movie"
            ? "Search Movies by Genre"
            : "Search TV Shows by Genre"}
        </p>
        <div className="mt-8">
          <label htmlFor="genre-selector" className="text-2xl">
            Select your Genre(s)
          </label>
          <Autocomplete
            className="mt-2"
            multiple
            disableCloseOnSelect
            id="genre-selector"
            options={genreOpts}
            getOptionLabel={(option) => option.name}
            onChange={(_, opts) => setGenres(opts)}
            renderInput={(params) => <TextField {...params} label="Genres" />}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Genres;
