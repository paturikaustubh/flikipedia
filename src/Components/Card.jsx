import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

function Card({ item, type }) {
  return (
    <Tooltip title={type === "movie" ? item.title : item.name} enterDelay={300}>
      <Link
        onClick={() => window.scrollTo({ top: 0 })}
        to={`/flikipedia/${type}/${item.id}`}
        className="flex-shrink-0"
      >
        <img
          loading="lazy"
          className="hover:lg:scale-105 duration-300 lg:opacity-80 rounded-md hover:opacity-100"
          src={
            item.poster_path &&
            `https://image.tmdb.org/t/p/w300${item.poster_path}`
          }
          alt={item.title}
          width="260px"
        />
      </Link>
    </Tooltip>
  );
}

export default Card;
