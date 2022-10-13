import { api } from "../api/api";
import { Show } from "../../interfaces/Show";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

type FetchShowById = (showId: string) => Promise<Show>;

export const fetchShow: FetchShowById = async (showId: string) => {
  const response = await api.get(`/tv/${showId}?api_key=${API_KEY}`);

  return response.data;
};
