import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import dayjs from "dayjs";

import { Tooltip } from "@mui/material";
import Card from "../Components/Card";

function Details({ type, setLoading, setNavIndx }) {
  let { id } = useParams();
  const [details, setDetails] = useState({
    genres: [],
    vote_average: null,
    original_language: "",
    spoken_languages: [],
    production_companies: [],
    seasons: [],
    networks: [],
    budget: 0,
    revenue: 0,
  });
  const [suggestions, setSuggestions] = useState([]);

  let header = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZGUxZmYxNTg5MjBhMzc5ZDNmZjhjNDk2YzVkNyIsInN1YiI6IjY0NmI2ZDhkYzM1MTRjMmIwYTMzNWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HbEmD6dynpOHWFNSglBkGwyS7-Scl1pyUtLwXzBpnI",
  };
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    // return (rhours + " hour(s) " + rminutes + " minute(s)");
    if (rhours > 1 && rminutes > 0)
      return `${rhours} hours ${rminutes} minutes`;
    else if (rhours === 1 && rminutes > 0)
      return `${rhours} hour ${rminutes} minutes`;
    else if (rhours > 1 && rminutes === 0) return `${rhours} hours`;
    else if (rhours === 1 && rminutes === 0) return `${rhours} hour`;
    else if (rhours === 0 && minutes > 0) return `${rminutes} minutes`;
  }

  useEffect(() => {
    type === "movie" ? setNavIndx(0) : setNavIndx(1);
    setLoading(true);
    async function getData() {
      await Axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
        {
          headers: header,
        }
      ).then((resp) => {
        setDetails((prevVals) => ({ ...prevVals, ...resp.data }));

        const revenue = document.getElementById("revenue");
        if (resp.data.revenue > resp.data.budget) {
          if (revenue.classList.contains("text-red-500")) {
            revenue.classList.remove("text-red-500");
          }
          revenue.classList.add("text-green-500");
        } else {
          if (revenue.classList.contains("text-green-500"))
            revenue.classList.remove("text-green-500");
          revenue.classList.add("text-red-500");
        }

        resp.data.budget === 0 && type === "movie"
          ? document.getElementById("budget").classList.add("text-red-500")
          : document.getElementById("budget").classList.contains("text-red-500")
          ? document.getElementById("budget").classList.remove("text-red-500")
          : "";

        resp.data.status === "Ended" && type === "tv"
          ? document.getElementById("status").classList.add("text-green-500")
          : document.getElementById("status").classList.add("text-orange-500");

        Axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`,
          { headers: header }
        ).then(({ data }) => {
          if (data) {
            setSuggestions(data.results);
            setLoading(false);
          }
        });
      });
    }
    getData();
  }, [id]);

  return (
    <div className="text-white">
      <div className="relative h-[700px]">
        <div
          className="h-full opacity-[0.65]"
          style={{
            backgroundImage: details.backdrop_path
              ? `url("https://image.tmdb.org/t/p/w1280${details.backdrop_path}")`
              : "",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cneter",
            filter: "blur(3px)",
            scale: "99%",
          }}
        />
        <div
          className="absolute bottom-0 w-full mt-4"
          style={{
            backgroundImage: "linear-gradient(transparent, black)",
          }}
        >
          <div className="lg:flex grid grid-cols-1 col-span-0 gap-8 items-end pb-1 pl-4 lg:w-3/4 w-full mt-4">
            <img
              loading="lazy"
              className="lg:h-[525px] h-[400px] sm:pt-8 rounded-md col-span-1"
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/w300${details.poster_path}`
                  : ""
              }
              alt="Poster"
            />
            <div className="flex flex-col flex-wrap mb-4 col-span-1">
              <p className="lg:text-6xl text-4xl font-bold text-slate-200 flex flex-wrap">
                {type === "movie" ? details.title : details.name}
              </p>

              <p className="lg:text-xl text-lg font-extralight mt-1 mb-4 text-gray-300 italic">
                {details.tagline}
              </p>
              <p className="lg:text-4xl text-3xl mb-6 font-light">
                <i className="fa fa-star" aria-hidden="true" />{" "}
                {Math.round(details.vote_average * 10) / 10} {"  "}
                <span className="lg:text-2xl text-lg">
                  ({details.vote_count} votes)
                </span>
              </p>
              {/* GENRES */}
              {details.genres[0] !== null && (
                <div className="flex gap-4 flex-wrap">
                  {details.genres.map((genre, indx) => {
                    return (
                      <Link
                        onClick={() => window.scrollTo({ top: 0 })}
                        key={indx}
                        to={`/flikipedia/genre/${genre.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                        className=" px-2 py-1 border-white border-2 rounded-lg hover:bg-neutral-800 duration-300 flex-wrap"
                      >
                        {genre.name}
                      </Link>
                    );
                  })}
                </div>
              )}
              {/* GENRES */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:gap-20 gap-4 grid-cols-1 lg:grid-cols-2 mb-16 px-8 mt-14">
        <div className="mt-2">
          <p className="lg:text-4xl text-2xl font-semibold">Overview</p>
          <div className="lg:w-48 w-24 border-2 border-red-500 mt-1" />
          <p className="lg:text-lg mt-4">
            {details.overview || "Not Updated Yet"}
          </p>
        </div>

        <div className="mt-2">
          <p className="lg:text-4xl text-2xl font-semibold">Details</p>
          <div className="lg:w-32 w-20 border-2 border-red-500 mt-1" />
          <div className="mt-4 flex flex-col gap-3">
            <p className="font-semibold lg:text-lg">
              Original Title:{" "}
              <span className="ml-2 font-light">
                {type === "movie"
                  ? details.original_title
                  : details.original_name}
              </span>
            </p>

            <p
              className="font-semibold lg:text-lg"
              style={{ ...(type === "movie" && { display: "none" }) }}
            >
              Status:{" "}
              <span className="ml-2 font-light" id="status">
                {details.status}
              </span>
            </p>

            <p
              className="font-semibold lg:text-lg"
              style={{ ...(type === "movie" && { display: "none" }) }}
            >
              Seasons - Episodes:{" "}
              <span className="ml-2 font-light">
                {`${details.number_of_seasons} - ${details.number_of_episodes}`}
              </span>
            </p>

            <p
              className="font-semibold lg:text-lg"
              style={{ ...(type === "tv" && { display: "none" }) }}
            >
              Run Time:{" "}
              <span className="ml-2 font-light">
                {timeConvert(details.runtime)}
              </span>
            </p>

            <p
              className="font-semibold lg:text-lg"
              style={{ ...(type === "tv" && { display: "none" }) }}
            >
              Release Date:{" "}
              <span className="ml-2 font-light text-sky-500">
                {dayjs(details.release_date).format("DD/MM/YYYY")}
              </span>
            </p>

            <p
              className="font-semibold lg:text-lg"
              style={{ ...(type === "movie" && { display: "none" }) }}
            >
              Latest Airing Period:{" "}
              <span className="ml-2 font-light text-sky-500">
                {dayjs(details.first_air_date).format("DD/MM/YYYY")}{" "}
                <b className="text-sm text-slate-100">TO</b>
                {"   "}
                {dayjs(details.last_air_date).format("DD/MM/YYYY")}
              </span>
            </p>
            <p className="font-semibold lg:text-lg">
              Original Language:{" "}
              <span className="ml-2 font-light">
                {details.original_language.toUpperCase()}
              </span>
            </p>
            <div className="font-semibold lg:text-lg">
              Available Languages:{" "}
              <div className="flex flex-wrap gap-4 mt-1 mb-2">
                {details.spoken_languages.map((lang) => {
                  return (
                    <Tooltip title={lang.english_name}>
                      <span
                        className="ml-2 font-light border-white border-2 rounded-md px-2 py-1"
                        key={lang.name}
                      >
                        {lang.name}
                      </span>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
            <p
              className="font-semibold lg:text-lg"
              style={{
                ...(type === "tv" && { display: "none" }),
              }}
            >
              Budget:{" "}
              <span className="ml-2 font-light" id="budget">
                {details.budget === 0
                  ? "Not Updated Yet"
                  : `$ ${details.budget
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              </span>
            </p>
            <p
              className="font-semibold lg:text-lg"
              style={{
                ...(details.budget === 0 ||
                  (type === "tv" && { display: "none" })),
              }}
            >
              Revenue:{" "}
              <span className="ml-2 font-light text-red-500" id="revenue">
                {details.revenue === 0
                  ? "Not Updated Yet"
                  : `$ ${details.revenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              </span>
            </p>
          </div>
        </div>
      </div>

      {type === "tv" && (
        <>
          <div className="px-8 mb-20 flex flex-col">
            <p className="lg:text-4xl text-2xl font-semibold">Seasons</p>
            <div className="w-24 lg:w-36 border-2 border-red-500 mt-1 mb-4" />
            <div className="flex gap-4 justify-around flex-wrap mt-8">
              {details.seasons.map((season, indx) => {
                return (
                  <div className="w-[300px] flex flex-col gap-2" key={indx}>
                    <Link
                      key={season.season_number}
                      to={`season/${season.season_number}`}
                    >
                      <img
                        loading="lazy"
                        className="lg:hover:scale-105 duration-300 mb-2 rounded-sm"
                        src={
                          season.poster_path &&
                          `https://image.tmdb.org/t/p/w500${season.poster_path}`
                        }
                        alt={`Season - ${season.season_number}`}
                      />
                    </Link>
                    <span className="lg:text-2xl text-lg self-center mb-4">
                      {season.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="px-8 mb-20 flex flex-col">
            <p className="lg:text-4xl text-2xl font-semibold">Networks</p>
            <div className="w-24 lg:w-36 border-2 border-red-500 mt-1 mb-4" />
            <div className="flex justify-around flex-wrap">
              {details.networks.map((network, indx) => {
                return (
                  <div className="flex flex-col gap-2" key={indx}>
                    <img
                      loading="lazy"
                      className="w-[300px] bg-slate-100 p-3 rounded-md"
                      src={
                        network.logo_path &&
                        `https://image.tmdb.org/t/p/w500${network.logo_path}`
                      }
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      <div
        className="px-8 mb-20 flex flex-col"
        style={{
          ...(details.production_companies.length === 0 && { display: "none" }),
        }}
      >
        <p className="lg:text-4xl text-2xl font-semibold">
          Production Companies
        </p>
        <div className=" lg:w-80 w-44 border-2 border-red-500 mt-1 mb-4" />
        <div className="flex flex-wrap justify-around gap-4">
          {details.production_companies.map((comp, indx) => {
            return (
              <div
                key={indx}
                className=" w-40 lg:shrink-0 self-center"
                style={{
                  ...(comp.logo_path === null &&
                    details.production_companies.length > 1 && {
                      display: "none",
                    }),
                }}
              >
                <img
                  loading="lazy"
                  className="bg-slate-100 p-3 rounded-md lg:w-52 w-48 text-black"
                  src={
                    comp.logo_path
                      ? `https://image.tmdb.org/t/p/w500${comp.logo_path}`
                      : ""
                  }
                  alt={comp.name}
                />
                <p className="text-lg mt-2">{comp.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="px-8 flex-col flex flex-wrap"
        style={{ ...(details.homepage === "" && { display: "none" }) }}
      >
        <p className="lg:text-4xl text-2xl font-semibold">Useful Links</p>
        <div className="w-40 lg:w-60 border-2 border-red-500 mt-1 mb-4" />
        <div className="flex justtify-between gap-3 mb-12">
          <Link
            target="_blank"
            to={details.homepage}
            className="bg-blue-700 font-light p-3 rounded-lg text-lg hover:bg-blue-600 duration-300"
          >
            Ofiicial Homepage
          </Link>
        </div>
      </div>

      <div className="px-8 flex flex-col flex-w mb-16 mt-8">
        <p className="lg:text-4xl text-2xl font-semibold">
          You might like these too...
        </p>
        <div className="w-40 lg:w-96 border-2 border-red-500 mt-1 mb-4" />
        <div className="flex gap-3 overflow-x-auto py-3 scroll-p-8 mb-4 overflow-y-hidden items-center whitespace-nowrap hide-scroll">
          {suggestions.map((suggestion) => {
            if (suggestion.poster_path)
              return <Card type={type} item={suggestion} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
