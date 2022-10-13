import { Movie } from "../../interfaces/Movie";
import { api } from "../api/api";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

type PaginateFetch = (page: number) => Promise<Movie[]>;

export const getMovies: PaginateFetch = async (page) => {
  const { data } = await api.get(
    `/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return data.results;
};
