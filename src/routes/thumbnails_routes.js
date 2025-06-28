import express from "express";
import { TmdbServices } from "../services/tmdb_services.js";
import { MovieThumbnailsController } from "../controllers/thumbnails/movie_thumbnail_controllers.js";
import { TvThumbnailsControllers } from "../controllers/thumbnails/tv_tumbnails_controllers.js";
import { TrendingThumbnails } from "../controllers/thumbnails/trending_thumbnails_controllers.js";

const thumbnails = express.Router();

const tmdbServices = new TmdbServices();
const movieThumbnailsControllers = new MovieThumbnailsController(tmdbServices);
const tvThumbnailsControllers = new TvThumbnailsControllers(tmdbServices);
const trendingThumbnailsControllers = new TrendingThumbnails(tmdbServices);

thumbnails.get(
  "/all/trending/:time_window",
  trendingThumbnailsControllers.getTrendingList
);

thumbnails.get(
  "/movies/popular/:page",
  movieThumbnailsControllers.getTumbnailOfPopularMovies
);
thumbnails.get(
  "/movies/now-playing/:page",
  movieThumbnailsControllers.getTumbnailOfNowPlayingMovies
);
thumbnails.get(
  "/movies/upcoming/:page",
  movieThumbnailsControllers.getTumbnailOfUpcomingMovies
);
thumbnails.get(
  "/movies/top-rated/:page",
  movieThumbnailsControllers.getTumbnailOfTopRatedMovies
);

thumbnails.get(
  "/tv/popular/:page",
  tvThumbnailsControllers.getTumbnailOfPopularTVs
);
thumbnails.get(
  "/tv/airing-today/:page",
  tvThumbnailsControllers.getTumbnailOfAiringTodayTVs
);
thumbnails.get("/tv/on-tv/:page", tvThumbnailsControllers.getTumbnailOfOnTVs);
thumbnails.get(
  "/tv/top-rated/:page",
  tvThumbnailsControllers.getTumbnailOfTopRatedTVs
);

export default thumbnails;
