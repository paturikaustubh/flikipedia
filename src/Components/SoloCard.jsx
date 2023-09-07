import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function SoloCard({ element, type, indx }) {
  const minMd = useMediaQuery("(min-width:768px)");
  const { id, title, vote_average, poster_path, name } = element;
  return (
    <Link
      to={`/flikipedia/${type}/${id}`}
      key={indx}
      className="rounded-md mx-auto w-full lg:hover:scale-105 duration-300 relative genre-img"
      onMouseEnter={() => {
        document.getElementById(`details-${id}`).classList.add("show");
      }}
      onMouseLeave={() => {
        document.getElementById(`details-${id}`).classList.remove("show");
      }}
      id={`genre-img`}
    >
      <img
        className="rounded-md"
        src={`https://image.tmdb.org/t/p/${
          minMd ? "w300" : "w185"
        }${poster_path}`}
        alt={title}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="card-details" id={`details-${id}`}>
        <span>{title ?? name}</span>
        <span>
          <i className="fa fa-star mr-1" aria-hidden="true" />
          {Math.round(vote_average * 10) / 10}
        </span>
      </div>
    </Link>
  );
}
