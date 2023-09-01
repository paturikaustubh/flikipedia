import { Link } from "react-router-dom";

function Card({ item, type }) {
  return (
    <Link
      onClick={() => window.scrollTo({ top: 0 })}
      to={`/flikipedia/${type}/${item.id}`}
      className="lg:w-40 hover:lg:w-96 duration-500 z-10 card-link rounded-md bg-neutral-900"
    >
      <img
        loading="lazy"
        className="hover:lg:scale-[1.03] lg:w-fit w-48 max-w-sm rounded-md duration-500 card"
        src={
          item.poster_path &&
          `https://image.tmdb.org/t/p/w300${item.poster_path}`
        }
        alt={item.title}
      />
    </Link>
  );
}

export default Card;
