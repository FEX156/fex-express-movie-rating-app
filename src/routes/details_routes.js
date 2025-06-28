import express from "express";
import { TmdbServices } from "../services/tmdb_services.js";
import { MovieDetailsControllers } from "../controllers/details/movie_details_controllers.js";
import { TvDetailControllers } from "../controllers/details/tv_details_controllers.js";

const details = express.Router();

const tmdbServices = new TmdbServices();
const movieDetailsControllers = new MovieDetailsControllers(tmdbServices);
const tvDetailControllers = new TvDetailControllers(tmdbServices);

// DETAIL MOVIES
details.get("/movies/:movie_id", movieDetailsControllers.getMovieDetails);
details.get("/movies/:movie_id/cast", movieDetailsControllers.getMovieCast);
details.get(
  "/movies/:movie_id/keywords",
  movieDetailsControllers.getMovieKeywords
);
details.get(
  "/movies/:movie_id/similar",
  movieDetailsControllers.getSimilarMovies
);

//DETAIL TV's
details.get("/tv/:tv_id", tvDetailControllers.getTvDetails);
details.get("/tv/:tv_id/cast", tvDetailControllers.getTvCast);
details.get("/tv/:tv_id/keywords", tvDetailControllers.getTvCast);
details.get("/tv/:tv_id/similar", tvDetailControllers.getSimilarTv);

export default details;
