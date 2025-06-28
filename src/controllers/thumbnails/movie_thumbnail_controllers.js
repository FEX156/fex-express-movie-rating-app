import { movieUrls } from "../../libs/tmdb_endpoints.js";

export class MovieThumbnailsController {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTumbnailOfPopularMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        movieUrls.popular,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, title, release_date, vote_average } =
          thumbnail;
        return {
          media_type: "movie",
          id,
          poster_path,
          title,
          release_date,
          vote_average,
        };
      });
      res.status(200).json({
        succes: true,
        category: "popular",
        page: req.params.page,
        movie_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };

  getTumbnailOfNowPlayingMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        movieUrls.now_playing,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, title, release_date, vote_average } =
          thumbnail;
        return {
          media_type: "movie",
          id,
          poster_path,
          title,
          release_date,
          vote_average,
        };
      });
      res.status(200).json({
        succes: true,
        category: "now playing",
        page: req.params.page,
        movie_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };

  getTumbnailOfUpcomingMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        movieUrls.upcoming,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, title, release_date, vote_average } =
          thumbnail;
        return {
          media_type: "movie",
          id,
          poster_path,
          title,
          release_date,
          vote_average,
        };
      });
      res.status(200).json({
        succes: true,
        category: "upcoming",
        page: req.params.page,
        movie_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };

  getTumbnailOfTopRatedMovies = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        movieUrls.top_rated,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, title, release_date, vote_average } =
          thumbnail;
        return {
          media_type: "movie",
          id,
          poster_path,
          title,
          release_date,
          vote_average,
        };
      });
      res.status(200).json({
        succes: true,
        category: "top rated",
        page: req.params.page,
        movie_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };
}
