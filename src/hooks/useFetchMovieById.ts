import { useQuery } from "react-query";
import { fetchMovie } from "../middleware/library/movie";

export const useFetchMovieById = (movieId: string) =>
  useQuery(["movie", movieId], () => fetchMovie(movieId));
