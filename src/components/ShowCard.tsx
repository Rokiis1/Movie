import { Show } from "../interfaces/Show";
import { Link } from "react-router-dom";

const Card = ({ id, poster_path, original_name }: Show) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_name}
        />
        <Link to={`/tv/${id}`}>
          <h5>{original_name}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
