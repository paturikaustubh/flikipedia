import { Link } from "react-router-dom";

function Card({ item, type, indx }) {
  console.log(item);
  return (
    <Link
      onClick={() => window.scrollTo({ top: 0 })}
      to={`/flikipedia/${type}/${item.id}`}
      className="lg:w-40 hover:lg:w-96 duration-500 z-10 card-link rounded-md bg-neutral-900 hover:lg:scale-[1.03] relative"
      id={`container-${item.id}`}
      onMouseEnter={() => {
        const element = document.getElementById(`details-${item.id}-${indx}`);
        console.log(element);
        element.classList.add("show");
      }}
      onMouseLeave={() => {
        const element = document.getElementById(`details-${item.id}-${indx}`);
        element.classList.remove("show");
      }}
    >
      <img
        loading="lazy"
        className="lg:w-fit w-48 max-w-sm rounded-md duration-500 card"
        src={
          item.poster_path &&
          `https://image.tmdb.org/t/p/w300${item.poster_path}`
        }
        alt={item.title}
      />
      <div className="card-details" id={`details-${item.id}-${indx}`}>
        <span>{item.title}</span>
        <span>
          <i className="fa fa-star mr-1" aria-hidden="true" />
          {item.vote_average}
        </span>
      </div>
    </Link>
  );
}

export default Card;
