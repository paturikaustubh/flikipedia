import { useState, useEffect, useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Axios from "axios";

import {
  Autocomplete,
  MenuItem,
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

  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [genreOpts, setGenreOpts] = useState([]);
  const [separator, setSeparator] = useState("%2C");

  const [data, setData] = useState([]);

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
        console.log(data.results[0]);
        setData(data.results);
      });
    }
    getData();
  }, [adult]);

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[6.5rem] text-white lg:px-8 md:px-4 px-2">
        <p className="lg:text-5xl text-3xl font-[500] text-orange-500">
          {type === "movie"
            ? "Search Movies by Genre"
            : "Search TV Shows by Genre"}
        </p>
        <div className="mt-8 grid grid-cols-12 gap-4">
          <div className="lg:col-span-8 md:col-span-6 col-span-12">
            <p className="lg:text-2xl text-lg font-[300]">
              Select your Genre(s)
            </p>
            <Autocomplete
              size="medium"
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
          <div className="lg:col-span-4 md:col-span-6 col-span-12 w-full">
            <p className="lg:text-2xl text-lg md:text-right mb-2 font-[300]">
              Include genres as
            </p>
            <TextField
              select
              value={separator}
              className="w-full"
              onChange={({ target }) => setSeparator(target.value)}
              disabled={genres.length < 2}
            >
              <MenuItem value="%2C">And</MenuItem>
              <MenuItem value="%7C">Or</MenuItem>
            </TextField>
          </div>
          <div className="col-span-12 self-center ml-auto">
            <div
              className="lg:text-xl text-fliki-500 border-2 border-fliki-500 rounded-md px-4 py-2 cursor-pointer hover:text-neutral-900 hover:bg-fliki-500 duration-200"
              onClick={() => {
                Axios.get(
                  `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc${
                    genres.length > 0
                      ? `&with_genres=${genres
                          .map((genre) => genre.id)
                          .join(separator)}`
                      : ""
                  }`,
                  {
                    headers: header,
                  }
                ).then(({ data }) => {
                  setData(data.results);
                });
              }}
            >
              Search
            </div>
          </div>
        </div>

        <div className="lg:text-5xl text-3xl mt-8 text-pedia-500 font-[500]">
          Results
        </div>

        <div className="mt-4 genre-grid">
          {data.map(({ id, title, vote_average, poster_path }) => {
            return (
              <Link className="rounded-md mx-auto" to={`/${type}/${id}`}>
                <img
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Genres;
