import express from "express";
import { MovieController } from "../controllers/tmdb_movie_controllers.js";
import { TmdbServices } from "../services/tmdb_services.js";
import { TvControllers } from "../controllers/tmdb_tv_controllers.js";
import { TmdbControllers } from "../controllers/tmdb_all_controllers.js";

const thumbnails = express.Router();

const tmdbServices = new TmdbServices();
const movieController = new MovieController(tmdbServices);
const tvControllers = new TvControllers(tmdbServices);
const allControllers = new TmdbControllers(tmdbServices);

thumbnails.get("/all/trending/:time_window", allControllers.getTrendingList);

thumbnails.get(
  "/movies/popular/:page",
  movieController.getTumbnailOfPopularMovies
);
thumbnails.get(
  "/movies/now-playing/:page",
  movieController.getTumbnailOfNowPlayingMovies
);
thumbnails.get(
  "/movies/upcoming/:page",
  movieController.getTumbnailOfUpcomingMovies
);
thumbnails.get(
  "/movies/top-rated/:page",
  movieController.getTumbnailOfTopRatedMovies
);

thumbnails.get("/tv/popular/:page", tvControllers.getTumbnailOfPopularTVs);
thumbnails.get(
  "/tv/airing-today/:page",
  tvControllers.getTumbnailOfAiringTodayTVs
);
thumbnails.get("/tv/on-tv/:page", tvControllers.getTumbnailOfOnTVs);
thumbnails.get("/tv/top-rated/:page", tvControllers.getTumbnailOfTopRatedTVs);

export default thumbnails;
