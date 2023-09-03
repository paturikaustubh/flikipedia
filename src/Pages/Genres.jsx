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
import { ConsumerEffect } from "../Context/Data";
import { Add } from "@mui/icons-material";

function Genres({ setNavIndx, setLoading }) {
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

  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [genreOpts, setGenreOpts] = useState([]);
  const [separator, setSeparator] = useState("%2C");
  const [type, setType] = useState("movie");

  const [data, setData] = useState([]);

  useEffect(() => {
    setNavIndx(2);
    Axios.get(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, {
      headers: header,
    }).then(({ data }) => {
      setGenreOpts(data.genres);
    });
  }, [type]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc${
          genres.length > 0
            ? `&with_genres=${genres.map((genre) => genre.id).join(separator)}`
            : ""
        }`,
        {
          headers: header,
        }
      ).then(({ data }) => {
        setData(data.results);
        setLoading(false);
      });
    }
    getData();
    setPage(1);
  }, [adult, type]);

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[6.5rem] text-white lg:px-8 md:px-4 px-2">
        <p className="lg:text-5xl text-3xl font-[500] text-orange-500">
          {type === "movie"
            ? "Search Movies by Genre"
            : "Search TV Shows by Genre"}
        </p>
        <div className="mt-8 grid grid-cols-12 gap-4">
          <div className="lg:col-span-8 md:col-span-6 col-span-12 items-center">
            <Autocomplete
              size="medium"
              multiple
              disableCloseOnSelect
              id="genre-selector"
              options={genreOpts}
              getOptionLabel={(option) => option.name}
              onChange={(_, opts) => setGenres(opts)}
              renderInput={(params) => <TextField {...params} label="Genres" />}
            />
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6 w-full">
            <TextField
              select
              value={separator}
              className="w-full"
              onChange={({ target }) => setSeparator(target.value)}
              disabled={genres.length < 2}
              label="Include genres as"
            >
              <MenuItem value="%2C">And</MenuItem>
              <MenuItem value="%7C">Or</MenuItem>
            </TextField>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6 w-full">
            <TextField
              select
              value={type}
              className="w-full"
              onChange={({ target }) => setType(target.value)}
              label="Category"
            >
              <MenuItem value="movie">Movies</MenuItem>
              <MenuItem value="tv">TV/Series</MenuItem>
            </TextField>
          </div>
          <div className="col-span-12 self-center ml-auto">
            <div
              className="lg:text-xl text-fliki-500 border-2 border-fliki-500 rounded-md px-4 py-2 cursor-pointer hover:text-neutral-900 hover:bg-fliki-500 duration-200"
              onClick={() => {
                setLoading(true);
                document.getElementById("genre-img").classList.add("hide");
                Axios.get(
                  `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc${
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
                  document.getElementById("genre-img").classList.remove("hide");
                  setLoading(false);
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

        <div className="my-4 genre-grid">
          {data.map(({ id, title, vote_average, poster_path, name }, indx) => {
            return (
              <Link
                to={`/flikipedia/${type}/${id}`}
                key={indx}
                className="rounded-md mx-auto lg:w-full w-60 lg:hover:scale-105 duration-300 relative genre-img"
                onMouseEnter={() => {
                  document
                    .getElementById(`details-${id}`)
                    .classList.add("show");
                }}
                onMouseLeave={() => {
                  document
                    .getElementById(`details-${id}`)
                    .classList.remove("show");
                }}
                id={`genre-img`}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w45${poster_path})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <img
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
                <div className="card-details" id={`details-${id}`}>
                  <span>{title ?? name}</span>
                  <span>
                    <i className="fa fa-star mr-1" aria-hidden="true" />
                    {vote_average}
                  </span>
                </div>
              </Link>
            );
          })}

          <div
            className="rounded-md mx-auto lg:w-full w-60 lg:text-2xl bg-neutral-950 h-full flex justify-center items-center flex-col gap-4 cursor-pointer"
            onClick={async () => {
              setLoading(true);
              setPage((prevVal) => prevVal + 1);
              Axios.get(
                `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=${
                  page + 1
                }&sort_by=popularity.desc${
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
                setData((prevVals) => [...prevVals, ...data.results]);
                setLoading(false);
              });
            }}
            style={{ aspectRatio: "3/4" }}
          >
            <div className="bg-neutral-800 rounded-full p-4">
              <Add fontSize="large" />
            </div>
            View more
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Genres;
