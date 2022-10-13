import { useParams } from "react-router-dom";
import { useFetcShowById } from "../hooks/useFetchShowById";

const ShowPage = () => {
  const { id } = useParams();
  const { data: show } = useFetcShowById(id || "");
  return (
    <div className="container">
      <div className="movie-card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-6">
              <div className="white-box">
                <div className="poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show?.poster_path}`}
                    alt={show?.original_name}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6">
              <h4 className="text-left title">{show?.original_name}</h4>
              <p className="text-left">{show?.overview}</p>
              <div className="star">
                <span className="rating">{show?.vote_average}</span>
              </div>
              <div className="text-left movie-detail">
                <span>
                  Type
                  <strong>Movie</strong>
                </span>
                <span>
                  Release Data
                  <strong>{show?.first_air_date}</strong>
                </span>
                <span>
                  Genres
                  <strong>
                    {/* {show?.genre_ids.map(({ name }) => name).join(", ")} */}
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

export default ShowPage;
