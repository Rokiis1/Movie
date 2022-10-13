import { Movie } from "../interfaces/Movie";
import { Link } from "react-router-dom";

const Card = ({ id, poster_path, original_title }: Movie) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <Link to={`/movie/${id}`}>
          <h5>{original_title}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
