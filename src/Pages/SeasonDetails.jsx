import { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import dayjs from "dayjs";
import { ConsumerEffect } from "../Context/Data";

function SeasonDetails({ setNavIndx, setLoading }) {
  const { no, id } = useParams();
  const { header } = useContext(ConsumerEffect);

  const [details, setDetails] = useState({ episodes: [] });
  const listInnerRef = useRef();

  window.onscroll(() => {
    const { scrollTop, scrollHeight } = listInnerRef.current;
    if (scrollTop === scrollHeight) {
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
        <div className="flex gap-10 lg:flex-row flex-col">
          <img
            loading="lazy"
            src={
              details.poster_path &&
              `https://image.tmdb.org/t/p/w300${details.poster_path}`
            }
            alt=""
            className="rounded-md max-w-xs"
          />
          <div className="flex flex-col gap-4 lg:self-end flex-wrap md:col-span-9 col-span-6">
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
        <div className="mt-12 mb-8 text-5xl font-semibold text-sky-600">
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
                <div className="pr-4 text-lg lg:flex hidden col-span-2 justify-between gap-10">
                  <div className="max-w-[55ch] text-justify">
                    {episode.overview}
                  </div>
                  <div>{Math.round(episode.vote_average * 10) / 10}</div>
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
