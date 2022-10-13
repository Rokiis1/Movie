import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie } from "../../interfaces/Movie";

interface FavouriteState {
  movies: Movie[];
}

const initialState: FavouriteState = {
  movies: [],
};

const addFavouriteMovie = (
  state: FavouriteState,
  action: PayloadAction<Movie>
) => {
  const existingMovie = state.movies.find(
    (movie) => movie.id === action.payload.id
  );

  if (!existingMovie) {
    state.movies.push(action.payload);
  }
};

const removeFavouriteMovie = (
  state: FavouriteState,
  action: PayloadAction<number>
) => {
  const updateFavMovieList = state.movies.filter(
    (movie) => movie.id !== action.payload
  );
  state.movies = updateFavMovieList;
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavouriteMovie,
    removeFavouriteMovie,
  },
});

export const {
  addFavouriteMovie: addFavourite,
  removeFavouriteMovie: removeFavourite,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
