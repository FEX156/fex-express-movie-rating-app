import express from "express";
import { MovieController } from "../controllers/tmdb_movie_controllers.js";
import { TmdbServices } from "../services/tmdb_services.js";
import { TvControllers } from "../controllers/tmdb_tv_controllers.js";

const router = express.Router();

const tmdbServices = new TmdbServices();
const movieController = new MovieController(tmdbServices);
const tvControllers = new TvControllers(tmdbServices);

router.get("/movies/discover/:page", movieController.getMovieLists);
router.get("/tv/discover/:page", tvControllers.getTvLists);

export default router;
