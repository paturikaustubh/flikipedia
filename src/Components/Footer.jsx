import { Link } from "react-router-dom";

export default function Footer() {
  const gridColClass =
    "lg:col-span-4 col-span-12 flex flex-col flex-wrap items-center";
  const gridTitleClass = "font-bold lg:text-2xl text-xl";
  return (
    <footer className="bottom-0 bg-neutral-950 text-slate-100 lg:px-8 px-2 pt-8 pb-2 flex flex-col justify-center items-center gap-12">
      <div className="font-bold md:text-5xl text-4xl lg:mx-8 mx-auto footer-title">
        <span className="text-fliki-500">Fliki</span>
        <span className="text-pedia-500">Pedia</span>
      </div>
      <div className="grid grid-cols-12 lg:gap-12 md:gap-8 gap-4 mx-auto w-full justify-center items-start">
        <div className={gridColClass}>
          <p className={gridTitleClass}>Word from the developer</p>
          <p className="font-light lg:mt-4 mt-2 lg:text-lg text-center">
            Heya!{" "}
            <a href="" target="_blank">
              <span className="text-fliki-500 text-xl font-normal">
                Kaustubh
              </span>{" "}
              <span className="text-pedia-500 text-xl font-normal">Paturi</span>
            </a>{" "}
            here, the developer behind this project. This work's been a labor of
            love, and I'm thrilled to share it with you. Hope you really like it
            and please feel free to reach out for any feedback/queries. Your
            input is invaluable.❤️
          </p>
        </div>
        <div className={gridColClass}>
          <p className={gridTitleClass}>About the website</p>
          <p className="font-light lg:mt-4 mt-2 lg:text-lg text-center">
            <span className="text-fliki-500 text-xl font-normal">Fliki</span>
            <span className="text-pedia-500 text-xl font-normal">Pedia</span> is
            an open platform for users to browse authentic information about
            Movies/TV Shows. All the data is fetched from{" "}
            <a
              target="_blank"
              href="https://www.themoviedb.org/"
              className="text-pedia-500"
            >
              The Movie Database
            </a>{" "}
            API.
          </p>
        </div>
        <div className={gridColClass}>
          <p className={gridTitleClass}>My socials</p>
          <div className="flex flex-col gap-1 lg:text-lg lg:mt-4 mt-2 links">
            <Link
              to="https://github.com/paturikaustubh"
              target="_blank"
              className="git"
            >
              GitHub
            </Link>
            <Link target="_blank" className="linkedin">
              LinkedIn
            </Link>
            <Link target="_blank" className="insta">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-8 text-neutral-500">
        Nothing great ever came that easy.
      </p>
    </footer>
  );
}
