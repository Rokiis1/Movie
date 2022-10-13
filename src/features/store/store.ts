import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favouriteMovieReducer from "../slices/favouriteMovieSlice";

export const store = configureStore({
  reducer: {
    favorites: favouriteMovieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
