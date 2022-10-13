import { Routes, Route } from "react-router-dom";
import FavouritePage from "../pages/FavouritePage";
import HomePage from "../pages/MoviesPage";
import MoviePage from "../pages/MoviePage";
import { RouteKey } from "./RoutesKey";
import TvPage from "../pages/TvPage";
import TrendingPage from "../pages/TrendingPage";
import ShowPage from "../pages/ShowPage";

const Router = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<HomePage />} />
    <Route path={RouteKey.Favourite} element={<FavouritePage />} />
    <Route path={RouteKey.Movie} element={<MoviePage />} />
    <Route path={RouteKey.TvShows} element={<TvPage />} />
    <Route path={RouteKey.Show} element={<ShowPage />} />
    <Route path={RouteKey.Trending} element={<TrendingPage />} />
  </Routes>
);

export default Router;
