import express from "express";
import { MovieController } from "../controllers/tmdb_movie_controllers.js";
import { TmdbServices } from "../services/tmdb_services.js";
import { TvControllers } from "../controllers/tmdb_tv_controllers.js";
import { TmdbControllers } from "../controllers/tmdb_all_controllers.js";

const router = express.Router();

const tmdbServices = new TmdbServices();
const movieController = new MovieController(tmdbServices);
const tvControllers = new TvControllers(tmdbServices);
const allControllers = new TmdbControllers(tmdbServices);

router.get("/all/trending/:time_window", allControllers.getTrendingList);

router.get("/movies/popular/:page", movieController.getTumbnailOfPopularMovies);
router.get(
  "/movies/now_playing/:page",
  movieController.getTumbnailOfNowPlayingMovies
);
router.get(
  "/movies/upcoming/:page",
  movieController.getTumbnailOfUpcomingMovies
);
router.get(
  "/movies/top_rated/:page",
  movieController.getTumbnailOfTopRatedMovies
);

router.get("/tv/popular/:page", tvControllers.getTumbnailOfPopularTVs);
router.get("/tv/airing_today/:page", tvControllers.getTumbnailOfAiringTodayTVs);
router.get("/tv/on_tv/:page", tvControllers.getTumbnailOfOnTVs);
router.get("/tv/top_rated/:page", tvControllers.getTumbnailOfTopRatedTVs);

export default router;
