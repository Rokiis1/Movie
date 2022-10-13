import { api } from "../api/api";
import { Movie } from "../../interfaces/Movie";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

type FetchMovieById = (movieId: string) => Promise<Movie>;

export const fetchMovie: FetchMovieById = async (movieId: string) => {
  const response = await api.get(`/movie/${movieId}?api_key=${API_KEY}`);

  return response.data;
};
