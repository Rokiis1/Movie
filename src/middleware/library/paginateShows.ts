import { Show } from "../../interfaces/Show";
import { api } from "../api/api";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

type PaginateFetch = (page: number) => Promise<Show[]>;

export const getShows: PaginateFetch = async (page) => {
  const { data } = await api.get(
    `/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return data.results;
};
