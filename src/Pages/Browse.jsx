import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import { ChevronLeft, ChevronRight, East } from "@mui/icons-material";

import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import { Consumer, Data } from "../Context/Data";

function Movies({ setLoading, setNavIndx, navIndx, type }) {
  const [carouselData, setCarouselData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [actionData, setActionData] = useState([]);
  const [comedyData, setComedyData] = useState([]);
  const [crimeData, setCrimeData] = useState([]);
  const [horrorData, setHorrorData] = useState([]);
  const [romanceData, setRomanceData] = useState([]);
  let header = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZGUxZmYxNTg5MjBhMzc5ZDNmZjhjNDk2YzVkNyIsInN1YiI6IjY0NmI2ZDhkYzM1MTRjMmIwYTMzNWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HbEmD6dynpOHWFNSglBkGwyS7-Scl1pyUtLwXzBpnI",
  };

  const bodyElements = [
    {
      name: "Popular",
      data: popularData,
      to: "category/popular",
    },
    {
      name: "Top Rated",
      data: topData,
      to: "category/top-rated",
    },
    {
      name: "Action-Adventure",
      data: actionData,
      to: "genre",
    },
    {
      name: "Comedy",
      data: comedyData,
      to: "genre",
    },
    {
      name: "Crime-Suspense",
      data: crimeData,
      to: "genre",
    },
    {
      name: "Horror-Thriller",
      data: horrorData,
      to: "genre",
    },
    {
      name: "Romance",
      data: romanceData,
      to: "genre",
    },
  ];

  const { adult } = useContext(Consumer);

  useEffect(() => {
    type === "movie" ? setNavIndx(0) : setNavIndx(1);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    function getCarouselData() {
      Axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`,
        {
          headers: header,
        }
      ).then((resp) => {
        setCarouselData(resp.data.results);
      });
    }

    function getTopData() {
      Axios.get(
        `https://api.themoviedb.org/3/${type}?include_adult=${adult}/top_rated?language=en-US&page=1`,
        {
          headers: header,
        }
      ).then((resp) => {
        setTopData(resp.data.results);
      });
    }

    function getPopularData() {
      Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: header,
        }
      ).then((resp) => {
        setPopularData(resp.data.results);
      });
    }

    function getActionData() {
      Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C12`,
        { headers: header }
      ).then((resp) => {
        setActionData(resp.data.results);
      });
    }

    function getComedyData() {
      Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
        { headers: header }
      ).then((resp) => {
        setComedyData(resp.data.results);
      });
    }

    function getCrimeData() {
      Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80,9648`,
        { headers: header }
      ).then((resp) => {
        setCrimeData(resp.data.results);
      });
    }

    function getHorrorData() {
      Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27,53`,
        { headers: header }
      ).then((resp) => {
        setHorrorData(resp.data.results);
      });
    }

    function getRomanceData() {
      Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749`,
        { headers: header }
      ).then((resp) => {
        setRomanceData(resp.data.results);
        setLoading(false);
      });
    }

    getCarouselData();
    getTopData();
    getPopularData();
    getActionData();
    getComedyData();
    getCrimeData();
    getHorrorData();
    getRomanceData();
  }, [type, adult]);

  return (
    <>
      <title>FlikiPedia</title>
      <div className="text-white">
        <Carousel data={carouselData} navIndx={navIndx} />

        {bodyElements.map((element, index) => {
          return (
            <div
              className="mt-16 text-white"
              key={index}
              style={{ ...(element.data.length === 0 && { display: "none" }) }}
            >
              <p className="text-3xl text-teal-100 font-bold mb-4 pl-8">
                {`${element.name} `}
                <span>
                  <East fontSize="large" />
                </span>
              </p>
              <div className="relative">
                <div
                  className="flex gap-3 overflow-x-auto py-3 pl-8 mb-4 overflow-y-hidden items-center whitespace-nowrap hide-scroll group cards scroll-smooth"
                  id={`cards-${index}`}
                  onScroll={() => {
                    const element = document.getElementById(`cards-${index}`);
                    if (Math.round(element.scrollLeft) === 0)
                      document
                        .getElementById(`prev-${index}`)
                        .classList.remove("show");
                    else
                      document
                        .getElementById(`prev-${index}`)
                        .classList.add("show");
                    if (
                      Math.round(element.scrollWidth - element.clientWidth) ===
                      Math.round(element.scrollLeft)
                    )
                      document
                        .getElementById(`next-${index}`)
                        .classList.remove("show");
                    else
                      document
                        .getElementById(`next-${index}`)
                        .classList.add("show");
                  }}
                >
                  {element.data.slice(0, 15).map((item, indx) => {
                    return (
                      <Card item={item} key={indx} indx={index} type={type} />
                    );
                  })}
                  <div className="flex flex-col items-center gap-4 ml-12">
                    <Link
                      onClick={() => window.scrollTo({ top: 0 })}
                      to={element.to}
                      className="bg-neutral-800 rounded-full p-4 lg:mx-28 hover:lg:scale-110 duration-300"
                    >
                      <East fontSize="large" />
                    </Link>
                    <p className="text-xl">View more</p>
                  </div>
                  <div
                    id={`prev-${index}`}
                    className={`lg:flex justify-center text-5xl items-center absolute left-0 z-20 h-[75%] prev hidden`}
                    onClick={() => {
                      const element = document.getElementById(`cards-${index}`);
                      element.scrollLeft -= 1500;
                    }}
                  >
                    <ChevronLeft fontSize="inherit" />
                  </div>
                  <div
                    id={`next-${index}`}
                    className={`lg:flex justify-center text-5xl items-center absolute right-0 z-20 h-[75%] next show hidden`}
                    onClick={() => {
                      const element = document.getElementById(`cards-${index}`);
                      element.scrollLeft += 1500;
                    }}
                  >
                    <ChevronRight fontSize="inherit" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
