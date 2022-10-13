import { useParams } from "react-router-dom";
import { useFetchMovieById } from "../hooks/useFetchMovieById";

const MoviePage = () => {
  const { id } = useParams();
  const { data: movie } = useFetchMovieById(id || "");

  return (
    <div className="container">
      <div className="movie-card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-6">
              <div className="white-box">
                <div className="poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={movie?.original_title}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6">
              <h4 className="text-left title">{movie?.original_title}</h4>
              <p className="text-left">{movie?.overview}</p>
              <div className="star">
                <span className="rating">{movie?.vote_average}</span>
              </div>
              <div className="text-left movie-detail">
                <span>
                  Type
                  <strong>Movie</strong>
                </span>
                <span>
                  Release Data
                  <strong>{movie?.release_date}</strong>
                </span>
                <span>
                  Run Time
                  <strong>{movie?.runtime} min</strong>
                </span>
                <span>
                  Genres
                  <strong>
                    {movie?.genres.map(({ name }) => name).join(", ")}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
