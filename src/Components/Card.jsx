import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

function Card({ item, type }) {
  return (
    <Tooltip title={type === "movie" ? item.title : item.name} enterDelay={300}>
      <Link
        onClick={() => window.scrollTo({ top: 0 })}
        to={`/flikipedia/${type}/${item.id}`}
        className=" flex-shrink-0 lg:w-40 hover:lg:w-96 duration-500 z-10"
      >
        <img
          loading="lazy"
          className="hover:lg:scale-[1.03] lg:w-fit w-48 rounded-md max-w-sm duration-500"
          src={
            item.poster_path &&
            `https://image.tmdb.org/t/p/w300${item.poster_path}`
          }
          alt={item.title}
        />
      </Link>
    </Tooltip>
  );
}

export default Card;