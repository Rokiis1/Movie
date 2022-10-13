import { useQuery } from "react-query";
import { getShows } from "../middleware/library/paginateShows";

export const usePaginatedFetchShows = (page: number) =>
  useQuery(["shows", page], () => getShows(page), {
    keepPreviousData: true,
  });
