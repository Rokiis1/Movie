import { useQuery } from "react-query";
import { fetchShow } from "../middleware/library/show";

export const useFetcShowById = (showId: string) =>
  useQuery(["show", showId], () => fetchShow(showId));
