export interface Show {
  id: number;
  poster_path: string | null;
  popularity: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<{ id: number; name: string }>;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
