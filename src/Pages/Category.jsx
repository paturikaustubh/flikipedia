import { useMemo, useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { MenuItem, TextField, createTheme } from "@mui/material";
import { ConsumerEffect } from "../Context/Data";
import Axios from "axios";
import { Add } from "@mui/icons-material";
import SoloCard from "../Components/SoloCard";

export default function Category({ setLoading }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [false]
  );
  const { state } = useLocation();
  const { header, handleErrorAlert } = useContext(ConsumerEffect);

  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(99);
  const [type, setType] = useState(state ? state.type : "movie");
  const [category, setCategory] = useState(state ? state.category : "popular");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category !== "popular" && category !== "top_rated")
      setCategory("popular");
  }, [type]);

  useEffect(() => {
    setLoading(true);
    Axios.get(
      `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=${page}`,
      { headers: header }
    )
      .then(({ data }) => {
        setData(data.results);
        setMaxPages(data.total_pages);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        handleErrorAlert(true);
      });
  }, [category, type]);

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[6.5rem] text-white lg:px-8 md:px-4 px-2">
        <p className="lg:text-5xl text-3xl font-[500] text-orange-500">
          Categories in {type === "movie" ? "Movies" : "TV Shows"}
        </p>
        <div className="mt-8 grid grid-cols-12 gap-4">
          <TextField
            className="lg:col-span-3 col-span-6"
            select
            value={category}
            label="Category"
            onChange={({ target }) => setCategory(target.value)}
          >
            {type === "tv" && (
              <MenuItem value="airing_today">Airing Today</MenuItem>
            )}
            {type === "tv" && (
              <MenuItem value="on_the_air">On the Air</MenuItem>
            )}
            {type === "movie" && (
              <MenuItem value="now_playing">Now Playing</MenuItem>
            )}
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="top_rated">Top Rated</MenuItem>
            {type === "movie" && <MenuItem value="upcoming">Upcoming</MenuItem>}
          </TextField>
          <TextField
            className="lg:col-span-3 col-span-6"
            select
            value={type}
            label="Type"
            onChange={({ target }) => setType(target.value)}
          >
            <MenuItem value="movie">Movies</MenuItem>
            <MenuItem value="tv">TV Shows</MenuItem>
          </TextField>
        </div>

        <p className="mt-8 text-pedia-500 lg:text-4xl text-3xl">Results</p>
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
                  `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${
                    page + 1
                  }`,
                  {
                    headers: header,
                  }
                )
                  .then(({ data }) => {
                    setData((prevVals) => [...prevVals, ...data.results]);
                    setLoading(false);
                  })
                  .catch((e) => {
                    setLoading(false);
                    handleErrorAlert(true);
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
