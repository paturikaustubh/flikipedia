import { useEffect, useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import { ChevronLeft, ChevronRight, East } from "@mui/icons-material";

import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import { ConsumerEffect } from "../Context/Data";

export default function Movies({ setLoading, setNavIndx, navIndx, type }) {
  const [carouselData, setCarouselData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [actionData, setActionData] = useState([]);
  const [comedyData, setComedyData] = useState([]);
  const [horrorData, setHorrorData] = useState([]);

  const bodyElements = [
    {
      name: "Popular",
      data: popularData,
      to: "/flikipedia/category",
    },
    {
      name: "Top Rated",
      data: topData,
      to: "/flikipedia/category",
    },
    {
      name: "Action-Adventure",
      data: actionData,
      to: "/flikipedia/genre",
      genres: type === "movie" ? [28, 12] : [10759],
    },
    {
      name: "Comedy",
      data: comedyData,
      to: "/flikipedia/genre",
      genres: [35],
    },
    {
      name: "Horror-Thriller",
      data: horrorData,
      to: "/flikipedia/genre",
      genres: [27, 53],
    },
  ];

  const { adult, header } = useContext(ConsumerEffect);

  useEffect(() => {
    type === "movie" ? setNavIndx(0) : setNavIndx(1);
    setLoading(true);
    async function getData() {
      await Axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`,
        {
          headers: header,
        }
      )
        .then((resp) => {
          setCarouselData(resp.data.results);
        })
        .catch((e) => {
          setLoading(false);
          handleErrorAlert(true);
        });
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27,53`,
        { headers: header }
      )
        .then((resp) => {
          setHorrorData(resp.data.results);
        })
        .catch((e) => {
          setLoading(false);
          handleErrorAlert(true);
        });
      await Axios.get(
        `https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=1`,
        {
          headers: header,
        }
      )
        .then((resp) => {
          setTopData(resp.data.results);
        })
        .catch((e) => {
          setLoading(false);
          handleErrorAlert(true);
        });
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: header,
        }
      )
        .then((resp) => {
          setPopularData(resp.data.results);
        })
        .catch((e) => {
          setLoading(false);
          handleErrorAlert(true);
        });
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${
          type === "movie" ? "28,12" : "10759"
        }`,
        { headers: header }
      )
        .then((resp) => {
          setActionData(resp.data.results);
        })
        .catch((e) => {
          setLoading(false);
          handleErrorAlert(true);
        });
      await Axios.get(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
        { headers: header }
      )
        .then((resp) => {
          setComedyData(resp.data.results);
        })
        .catch((e) => {
          setLoading(false);
          handleErrorAlert(true);
        });
      setLoading(false);
    }

    getData();
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
              <Link
                to={element.to}
                state={{
                  genres: element.genres,
                  type: type,
                  category: element.name.toLowerCase().split(" ").join("_"),
                }}
                className="link-underline inline-block md:text-3xl text-2xl text-teal-100 font-bold mb-4 ml-8"
              >
                {`${element.name} `}
                <East fontSize="inherit" />
                <div />
              </Link>
              <div className="relative">
                <div
                  className="flex gap-3 overflow-x-auto py-3 pl-8 pr-4 mb-4 overflow-y-hidden items-center whitespace-nowrap hide-scroll group cards scroll-smooth"
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
                      <Fragment key={indx}>
                        <Card item={item} indx={index} type={type} />
                        {indx === element.data.slice(0, 15).length - 1 && (
                          <div className="flex flex-col items-center gap-4 lg:ml-24">
                            <Link
                              onClick={() => window.scrollTo({ top: 0 })}
                              to={element.to}
                              className="bg-neutral-800 rounded-full p-4 lg:mx-28 hover:lg:scale-110 duration-300"
                              state={{
                                genres: element.genres,
                                type: type,
                                category: element.name
                                  .toLowerCase()
                                  .split(" ")
                                  .join("_"),
                              }}
                            >
                              <East fontSize="large" />
                            </Link>
                            <p className="text-xl">View more</p>
                          </div>
                        )}
                      </Fragment>
                    );
                  })}
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
        <div className="flex justify-center items-center">
          <Link
            state={{ type: type, genres: [] }}
            to="/flikipedia/genre"
            className="text-center my-8 lg:text-3xl text-2xl text-fliki-500 border-2 rounded-md px-4 py-2 border-fliki-500 hover:text-neutral-900 hover:bg-fliki-500 duration-300"
          >
            More Genres
          </Link>
        </div>
      </div>
    </>
  );
}
