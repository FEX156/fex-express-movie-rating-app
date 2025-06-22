import { movieUrls } from "../libs/tmdb_endpoints.js";

export class MovieController {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTumbnailOfPopularMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(
        movieUrls.popular,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, title, release_date, vote_average } = thumbnail;
        return { poster_path, title, release_date, vote_average };
      });
      res
        .status(201)
        .json({
          succes: true,
          category: "popular",
          page: req.params.page,
          movie_list: thumbnails,
        });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  getTumbnailOfNowPlayingMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(
        movieUrls.now_playing,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, title, release_date, vote_average } = thumbnail;
        return { poster_path, title, release_date, vote_average };
      });
      res
        .status(201)
        .json({
          succes: true,
          category: "now playing",
          page: req.params.page,
          movie_list: thumbnails,
        });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  getTumbnailOfUpcomingMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(
        movieUrls.upcoming,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, title, release_date, vote_average } = thumbnail;
        return { poster_path, title, release_date, vote_average };
      });
      res
        .status(201)
        .json({
          succes: true,
          category: "upcoming",
          page: req.params.page,
          movie_list: thumbnails,
        });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  getTumbnailOfTopRatedMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(
        movieUrls.top_rated,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, title, release_date, vote_average } = thumbnail;
        return { poster_path, title, release_date, vote_average };
      });
      res
        .status(201)
        .json({
          succes: true,
          category: "top rated",
          page: req.params.page,
          movie_list: thumbnails,
        });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}
