import { useState, useEffect, useContext, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

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
import SoloCard from "../Components/SoloCard";

function Genres({ setLoading }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [false]
  );
  const location = useLocation();
  const { adult, header } = useContext(ConsumerEffect);

  const sortOpts = [
    {
      value: "popularity.asc",
      option: "Popularity ASC",
    },
    {
      value: "popularity.desc",
      option: "Popularity DESC",
    },
    {
      value: "revenue.asc",
      option: "Revenue ASC",
    },
    {
      value: "revenue.desc",
      option: "Revenue DESC",
    },
    {
      value: "primary_release_date.asc",
      option: "Primary release date ASC",
    },
    {
      value: "primary_release_date.desc",
      option: "Primary release date DESC",
    },
    {
      value: "vote_average.asc",
      option: "Vote average ASC",
    },
    {
      value: "vote_average.desc",
      option: "Vote average DESC",
    },
    {
      value: "vote_count.asc",
      option: "Vote count ASC",
    },
    {
      value: "vote_count.desc",
      option: "Vote count DESC",
    },
  ];

  const [page, setPage] = useState(39848);
  const [maxPages, setMaxPages] = useState(99);
  const [genres, setGenres] = useState(
    location.state ? location.state.genres : []
  );
  const [genreOpts, setGenreOpts] = useState([]);
  const [separator, setSeparator] = useState("%2C");
  const [type, setType] = useState(
    location.state ? location.state.type : "movie"
  );
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("popularity.desc");

  useEffect(() => {
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
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=${sortOrder}${
          genres.length > 0
            ? `&with_genres=${genres.map((genre) => genre).join(separator)}`
            : ""
        }`,
        {
          headers: header,
        }
      ).then(({ data }) => {
        setData(data.results);
        setMaxPages(data.total_pages);
        setLoading(false);
      });
    }
    getData();
    setPage(1);
  }, [adult, type, sortOrder]);

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[6.5rem] text-white lg:px-8 md:px-4 px-2">
        <p className="lg:text-5xl text-3xl font-[500] text-orange-500">
          Genres in {type === "movie" ? "Movies" : "TV Shows"}
        </p>
        <div className="mt-8 grid grid-cols-12 gap-4">
          <div className="lg:col-span-8 md:col-span-6 col-span-12 items-center">
            <Autocomplete
              size="medium"
              multiple
              disableCloseOnSelect
              id="genre-selector"
              options={genreOpts}
              value={genreOpts.filter(({ id }) => genres.includes(id))}
              getOptionLabel={(option) => option.name}
              onChange={(_, opts) => setGenres(opts.map(({ id }) => id))}
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
              label="Type"
            >
              <MenuItem value="movie">Movies</MenuItem>
              <MenuItem value="tv">TV Shows</MenuItem>
            </TextField>
          </div>
        </div>
        <div className="flex justify-end mt-2 gap-4 items-center">
          <div
            className="lg:text-xl text-fliki-500 border-2 border-fliki-500 rounded-md px-4 py-2 cursor-pointer hover:text-neutral-900 hover:bg-fliki-500 duration-200"
            onClick={() => {
              setLoading(true);
              document.getElementById("genre-img").classList.add("hide");
              Axios.get(
                `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=${sortOrder}${
                  genres.length > 0
                    ? `&with_genres=${genres
                        .map((genre) => genre)
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

        <div className="flex gap-4 mt-12 justify-between items-center">
          <div className="lg:text-4xl text-3xl text-pedia-500 font-[500]">
            Results
          </div>
          <TextField
            select
            value={sortOrder}
            onChange={({ target }) => setSortOrder(target.value)}
            label="Sort by"
          >
            {sortOpts.map(({ value, option }, indx) => (
              <MenuItem value={value} key={indx}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="my-4 genre-grid">
          {data.map((element, indx) => {
            return (
              <SoloCard element={element} key={indx} type={type} indx={indx} />
            );
          })}

          {page < maxPages && (
            <div
              className="rounded-md mx-auto lg:w-full w-60 lg:text-2xl bg-neutral-950 h-full flex justify-center items-center flex-col gap-4 cursor-pointer"
              onClick={async () => {
                setLoading(true);
                setPage((prevVal) => prevVal + 1);
                Axios.get(
                  `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=${
                    page + 1
                  }&sort_by=${sortOrder}${
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
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Genres;
