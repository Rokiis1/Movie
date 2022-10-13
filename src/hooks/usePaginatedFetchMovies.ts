import { useQuery } from "react-query";
import { getMovies } from "../middleware/library/paginateMovies";

export const usePaginatedFetchMovies = (page: number) =>
  useQuery(["movies", page], () => getMovies(page), {
    keepPreviousData: true,
  });
