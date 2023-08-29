import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import dayjs from "dayjs";

function SeasonDetails({ setNavIndx, setLoading }) {
  const { no, id } = useParams();

  const [details, setDetails] = useState({ episodes: [] });
  const listInnerRef = useRef();

  let header = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZGUxZmYxNTg5MjBhMzc5ZDNmZjhjNDk2YzVkNyIsInN1YiI6IjY0NmI2ZDhkYzM1MTRjMmIwYTMzNWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HbEmD6dynpOHWFNSglBkGwyS7-Scl1pyUtLwXzBpnI",
  };
  window.onscroll(() => {
    const { scrollTop, scrollHeight } = listInnerRef.current;
    console.log(" scrollTop, scrollHeight", scrollTop, scrollHeight);
    if (scrollTop === scrollHeight) {
      // TO SOMETHING HERE
      console.log("Reached bottom");
    }
  });

  useEffect(() => {
    setLoading(true);
    setNavIndx(1);
    Axios.get(
      `https://api.themoviedb.org/3/tv/${id}/season/${no}?language=en-US`,
      { headers: header }
    ).then((resp) => {
      setDetails(resp.data);
      setLoading(false);
    });
  }, [false]);

  return (
    <div className="text-white mt-24">
      <div className="flex flex-col flex-wrap lg:px-12 md:px-12 px-4">
        <div className="grid gap-4 lg:grid-cols-12 grid-cols-6">
          <img
            loading="lazy"
            src={
              details.poster_path &&
              `https://image.tmdb.org/t/p/w500${details.poster_path}`
            }
            alt=""
            className="md:col-span-3 rounded-md col-span-4"
          />
          <div className="flex flex-col gap-4 self-end flex-wrap md:col-span-9 col-span-6">
            <div className="lg:text-6xl text-5xl font-semibold">
              {details.name}
            </div>
            <div className="lg:text-3xl text-2xl text-gray-300 font-normal">{`Total episodes: ${details.episodes.length}`}</div>
            <div className="lg:text-xl text-lg text-gray-400 font-light">
              {dayjs(details.air_date).format("DD/MM/YYYY")}
            </div>
            <div className="lg:text-2xl text-xl text-gray-400 font-light">{`${details.overview}`}</div>
          </div>
        </div>
        <div className="mt-24 mb-8 text-5xl font-semibold text-sky-600">
          Episodes
        </div>
      </div>
      <div className="bg-neutral-800 w-full py-4 px-4 rounded-lg">
        <div className="flex flex-col gap-2 p-1" ref={listInnerRef}>
          {details.episodes.map((episode) => {
            return (
              <div
                className="grid lg:grid-cols-4 grid-cols-2 items-center rounded-md gap-4 py-4 px-2 flex-wrap border w-full bg-neutral-900 border-gray-700"
                key={episode.id}
              >
                <img
                  loading="lazy"
                  className="rounded-md"
                  src={
                    episode.still_path &&
                    `https://image.tmdb.org/t/p/w500${episode.still_path}`
                  }
                />
                <div className="flex flex-col gap-2">
                  <div className="lg:text-lg text-normal text-gray-300">
                    Episode: {episode.episode_number}
                  </div>
                  <div className="lg:text-2xl text-lg font-semibold">
                    {episode.name}
                  </div>
                  <div className="lg:text-lg text-normal font-light text-gray-400">
                    {episode.runtime} min
                  </div>
                </div>
                <div className="p-4 text-lg lg:block hidden">
                  {episode.overview}
                </div>
                <div className="p-4 justify-self-end text-xl lg:block hidden">
                  {Math.round(episode.vote_average * 10) / 10}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SeasonDetails;
