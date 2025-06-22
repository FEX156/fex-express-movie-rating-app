import { tvUrls } from "../libs/tmdb_endpoints.js";

export class TvControllers {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTumbnailOfPopularTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(tvUrls.popular, req.params.page);
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, name, first_air_date, vote_average } = thumbnail;
        return { poster_path, name, first_air_date, vote_average };
      });
      res
        .status(201)
        .json({ succes: true, page: req.params.page, tv_list: thumbnails });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  getTumbnailOfAiringTodayTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(
        tvUrls.airing_today,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, name, first_air_date, vote_average } = thumbnail;
        return { poster_path, name, first_air_date, vote_average };
      });
      res
        .status(201)
        .json({ succes: true, page: req.params.page, tv_list: thumbnails });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  getTumbnailOfOnTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(tvUrls.on_tv, req.params.page);
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, name, first_air_date, vote_average } = thumbnail;
        return { poster_path, name, first_air_date, vote_average };
      });
      res
        .status(201)
        .json({ succes: true, page: req.params.page, tv_list: thumbnails });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  getTumbnailOfTopRatedTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.get(
        tvUrls.top_rated,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { poster_path, name, first_air_date, vote_average } = thumbnail;
        return { poster_path, name, first_air_date, vote_average };
      });
      res
        .status(201)
        .json({ succes: true, page: req.params.page, tv_list: thumbnails });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}
