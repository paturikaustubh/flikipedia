import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import dayjs from "dayjs";

function CarouselComp({ data, navIndx }) {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
      showArrows={true}
    >
      {data.slice(0, 10).map((element, indx) => {
        return (
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={
              navIndx === 0
                ? `/flikipedia/movie/${element.id}`
                : `/flikipedia/tv/${element.id}`
            }
            key={indx}
          >
            <div
              className="lg:h-[720px] h-[450px] relative"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${element.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute bottom-0 left-0 w-full"
                style={{
                  backgroundImage: "linear-gradient(transparent, black)",
                }}
              >
                <div className="flex flex-col items-start px-8 py-10 lg:w-1/2 w-full lg:gap-3 gap-1 text-left">
                  <p className="text-white lg:text-5xl text-3xl font-extrabold">
                    {element.title || element.name}
                  </p>
                  <div className="test-white lg:text-3xl text-xl">
                    {Math.round(element.vote_average * 10) / 10}{" "}
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="test-white lg:text-2xl text-lg">
                    {dayjs(element.release_date).format("DD/MM/YYYY")}
                  </div>
                  <div className="test-white text-xl font-light lg:block hidden text-justify">
                    {element.overview}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
}

export default CarouselComp;
